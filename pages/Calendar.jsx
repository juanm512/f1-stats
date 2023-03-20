import { View, ScrollView, TouchableOpacity, Text } from "react-native"
import { useEffect, useState } from "react"
import { Link } from "react-router-native"
import { format, formatDistance } from "date-fns"

import { AntDesign } from "@expo/vector-icons"

import { SubTitle, SubTitleWithBorder, SubTitleWithFlag } from "../components/SubTitle"
import { Title, TitleWithArrow } from "../components/Title"
import { SimpleMap } from "../components/SimpleMap"

import { getFullURL } from "../utils/getFullURL"
import { CircuitsImages } from "../utils/getCircuitsData"
import { CountriesImages } from "../utils/getCountriesImages"

const Calendar = () => {
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    Promise.all([
      global.fetch(getFullURL("current")),
      global.fetch(getFullURL("current/next"))
    ])
      .then(([currentCalendar, nextRace]) => {
        if (!currentCalendar.ok || !nextRace.ok) throw new Error("Fetch failed")
        return Promise.all([currentCalendar.json(), nextRace.json()])
      })
      .then(([currentCalendar, nextRace]) => {
        const calendar = currentCalendar.MRData.RaceTable.Races
        const next = nextRace.MRData.RaceTable.Races[0]
        setData({
          calendar,
          nextRace: {
            raceName: next.raceName,
            round: next.round,
            date: next.date,
            time: next.time
          }
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
    <ScrollView style={{
      width: "100%",
      height: "100%"
    }}
    >
      <Link
        key="next-race"
        replace={TouchableOpacity}
        to="/"
        style={{
          flexDirection: "row",
          alignItems: "start",
          margin: 20,
          borderWidth: 2,
          borderColor: "#f61d00",
          borderRadius: 12
        }}
      >
        <>
          <View style={{
            padding: 10,
            flexShrink: 1,
            flexGrow: 1,
            alignItems: "start"
          }}
          >
            <SubTitle
              textStyle={{ fontSize: 11, color: "#fefefe70" }}
              subTitle={"Next - Round " + data.nextRace.round}

            />
            <Title style={{ fontSize: 20 }}>
              {data.nextRace.raceName}
            </Title>
            <SubTitle
              subTitle={
                formatDistance(new Date(data.nextRace.date + " " + data.nextRace.time), new Date(), {
                  addSuffix: true
                })
              }
              textStyle={{ color: "#f61d00" }}
            />
          </View>
          <View style={{
            backgroundColor: "#f61d00",
            height: "100%",
            justifyContent: "center",
            padding: 10,
            borderBottomRightRadius: 5,
            borderTopRightRadius: 5
          }}
          >
            <AntDesign
              name="right" size={32} color="#fefefe"
            />
          </View>
        </>
      </Link>

      {
        data.calendar.map((race) => (
          <View
            key={race.raceName}
            style={{
              paddingVertical: 10
            }}
          >
            <SubTitleWithBorder
              titlePos={race.round % 2 === 0
                ? "left"
                : "right"}
              subTitle={"Round " + race.round}
            />
            <Link
              replace={TouchableOpacity}
              to="/"
              style={{
                alignItems: "start",
                marginVertical: 15,
                marginHorizontal: 20,
                paddingVertical: 5
              }}
            >
              <>
                <SubTitleWithFlag
                  subTitle={
                    format(
                      new Date(data.nextRace.date + " " + data.nextRace.time),
                      "eee dd 'of' MMMM 'at' HH:mm "
                    )
                  }
                  color="#f61d00"
                  flag={CountriesImages[race.Circuit.Location.country]}
                />
                <TitleWithArrow
                  style={{
                    fontSize: 28
                  }}
                >
                  {race.raceName}
                </TitleWithArrow>
                <SubTitle
                  subTitle={race.Circuit.circuitName}
                  textStyle={{ color: "#f3f3f370" }}
                />
              </>
            </Link>
            <View style={{ marginHorizontal: 20 }}>
              {/* <Link to="/" style={{ marginHorizontal: 20 }}> */}
              <SimpleMap
                circuitImage={CircuitsImages[race.Circuit.circuitId]}
              />
              {/* </Link> */}
            </View>

          </View>
        ))
      }
    </ScrollView>
  )
}

export default Calendar
