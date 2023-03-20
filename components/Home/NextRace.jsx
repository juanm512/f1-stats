import { useEffect, useState } from "react"
import { View, TouchableOpacity, Text } from "react-native"
import { Link } from "react-router-native"
import { formatDistance } from "date-fns"

import { SubTitle, SubTitleWithBorder } from "../../components/SubTitle"
import { TitleWithArrow } from "../../components/Title"
import { SimpleMap } from "../../components/SimpleMap"

import { CircuitsImages } from "../../utils/getCircuitsData"
import { getFullURL } from "../../utils/getFullURL"

export const NextRace = () => {
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    global
      .fetch(getFullURL("current/next"))
      .then((response) => {
        if (!response.ok) throw new Error("Fetch failed")
        return response.json()
      })
      .then((data) => {
        setData(data)
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
        titlePos="right"
        subTitle={"Next race - Round " + data.MRData.RaceTable.round}
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
            {data.MRData.RaceTable.Races[0].raceName}
          </TitleWithArrow>
          <SubTitle
            subTitle={
              formatDistance(new Date(data.MRData.RaceTable.Races[0].date + " " + data.MRData.RaceTable.Races[0].time), new Date(), {
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
          circuitImage={CircuitsImages[data.MRData.RaceTable.Races[0].Circuit.circuitId]}
        />
      </Link>

      {/* link to full calendar */}
      {/* <Link
      to="/calendar"
      style={{
        marginHorizontal: 20,
        marginVertical: 10,
        paddingVertical: 5,
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 1,
        borderColor: "#f61d00",
        borderRadius: 5
      }}
    >
      <Text
        style={{
          fontFamily: "Formula1-Regular",
          fontSize: 16,
          fontWeight: "bold",
          color: "#f61d00",
          textAlign: "center",
          paddingVertical: 5,
          paddingHorizontal: 10

        }}
      >
        View full calendar
      </Text>
    </Link> */}

    </View>
  )
}
