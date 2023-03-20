import { useEffect, useState } from "react"
import { View, TouchableOpacity, Text } from "react-native"
import { Link } from "react-router-native"
import { formatDistance } from "date-fns"

import { SubTitle, SubTitleWithBorder } from "../../components/SubTitle"
import { TitleWithArrow } from "../../components/Title"
import Podium from "../../components/Podium"
import { SimpleMap } from "../../components/SimpleMap"
import { FastestPitStop } from "../../components/FastestPitStop"

import { DriversImages } from "../../utils/getDriversData"
import { TeamsData } from "../../utils/getTeamsData"
import { CircuitsImages } from "../../utils/getCircuitsData"
import { getFullURL } from "../../utils/getFullURL"

export const PreviousRace = () => {
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    Promise.all([
      global.fetch(getFullURL("current/last/pitstops", "limit=100")),
      global.fetch(getFullURL("current/last/results"))
    ])
      .then(([pitstops, results]) => {
        if (!pitstops.ok || !results.ok) throw new Error("Fetch failed")
        return Promise.all([pitstops.json(), results.json()])
      })
      .then(([pitstops, results]) => {
        const { Races } = results.MRData.RaceTable
        const { Results, Circuit } = Races[0]
        const drivers = Results.slice(0, 3).map(({ Driver, Constructor }) => ({
          driverId: Driver.driverId,
          familyName: Driver.familyName,
          constructorId: Constructor.constructorId
        }))

        // console.log(pitstops.MRData.RaceTable.Races[0].PitStops.sort((a, b) => a.duration - b.duration)[0])
        const fastestPitStop = pitstops.MRData.RaceTable.Races.length === 0
          ? null
          : pitstops.MRData.RaceTable.Races[0].PitStops.reduce(
            (fastest, current) => {
              if (current.duration < fastest.duration) {
                fastest = current
              }
              return fastest
            }, {
              duration: Infinity
            }
          )

        setData({
          round: Races[0].round,
          raceName: Races[0].raceName,
          date: Races[0].date,
          time: Races[0].time,
          circuitId: Circuit.circuitId,
          drivers,
          fastestPitStop: fastestPitStop
            ? {
                driverId: fastestPitStop.driverId,
                duration: fastestPitStop.duration
              }
            : null
        })
      })
      .catch((error) => {
        setError(error)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [])

  if (loading) return <Text>...loading</Text>
  if (error) return <Text>...error</Text>
  return (
    <View
      style={{
        paddingVertical: 10
      }}
    >
      <SubTitleWithBorder
        subTitle={"Next race - Round " + data.round}
        titlePos="left"
      />
      <Link
        replace={TouchableOpacity}
        to="/"
        style={{
          alignItems: "start",
          paddingVertical: 20,
          marginHorizontal: 20
        }}
      >
        <>
          <TitleWithArrow>
            {data.raceName}
          </TitleWithArrow>
          <SubTitle
            subTitle={
              formatDistance(new Date(data.date + " " + data.time), new Date(), {
                addSuffix: true
              })
              // format(new Date(data.MRData.RaceTable.Races[0].date + " " + data.MRData.RaceTable.Races[0].time), "eee dd 'of' MMMM 'at' HH 'o''clock'")
            }
            textStyle={{ color: "#f61d00" }}
          />
        </>
      </Link>
      <Link to="/" style={{ marginHorizontal: 20 }}>
        <SimpleMap
          circuitImage={CircuitsImages[data.circuitId]}
        />
      </Link>
      <Podium
        firstPlace={{
          name: data.drivers[0].familyName,
          driver_image: DriversImages[data.drivers[0].driverId],
          team: TeamsData[data.drivers[0].constructorId].name,
          team_color: TeamsData[data.drivers[0].constructorId].color
        }}
        secondPlace={{
          name: data.drivers[1].familyName,
          driver_image: DriversImages[data.drivers[1].driverId],
          team: TeamsData[data.drivers[1].constructorId].name,
          team_color: TeamsData[data.drivers[1].constructorId].color
        }}
        thirdPlace={{
          name: data.drivers[2].familyName,
          driver_image: DriversImages[data.drivers[2].driverId],
          team: TeamsData[data.drivers[2].constructorId].name,
          team_color: TeamsData[data.drivers[2].constructorId].color
        }}
      />
      {
        data.fastestPitStop && (
          <FastestPitStop data={data.fastestPitStop} />
        )
      }
    </View>
  )
}
