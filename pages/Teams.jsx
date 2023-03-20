import { View, Text, ScrollView } from "react-native"
import { useEffect, useState } from "react"

import { AntDesign } from "@expo/vector-icons"

import ConstructorContainer from "../components/Teams/ConstructorContainer"
import { SubTitle } from "../components/SubTitle"
import { Title } from "../components/Title"

import { getFullURL } from "../utils/getFullURL"
import { CountriesImages } from "../utils/getCountriesImages"
import { DriversData, DriversImages } from "../utils/getDriversData"
import { TeamsImages, TeamsData, CarsImages } from "../utils/getTeamsData"

const Teams = () => {
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    global.fetch(getFullURL("current/constructorStandings"))
      .then((res) => {
        if (!res.ok) throw new Error("Fetch failed")
        return res.json()
      })
      .then((res) => {
        const data = res.MRData.StandingsTable.StandingsLists
        const ConstructorStandings = data[0].ConstructorStandings

        setData({
          round: data[0].round,
          constructors: ConstructorStandings
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
      {/* <View
        style={{
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "row",
          padding: 10
          // backgroundColor: "#f61d00"
        }}
      >
        <LinearGradient
          // Background Linear Gradient
          colors={["#f61d00", "transparent"]}
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            zIndex: -1,
            height: "100%",
            width: "100%"
          }}
        />
        <ImageN
          style={{ width: 100, height: 80, marginRight: 10, resizeMode: "contain" }}
          source={require("../assets/logos/f1_logo.svg")}
        />
        <Text
          style={{
            fontFamily: "Formula1-Black",
            fontSize: 32,
            fontWeight: "bold",
            color: "#fff",
            textAlign: "center"

          }}
        >
          drivers standing
        </Text>
      </View> */}
      <View
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
            <Title style={{ fontSize: 20 }}>
              Constructors standing
            </Title>
            <SubTitle
              subTitle={"after Round " + data.round}
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
              name="Trophy" size={32} color="#fefefe"
            />
          </View>
        </>
      </View>
      {data.constructors.map((constructor, index) => (
        <ConstructorContainer
          key={index}
          position={constructor.position}
          points={constructor.points}
          ConstructorName={constructor.Constructor.name}
          teamColor={TeamsData[constructor.Constructor.constructorId].color}
          flag={CountriesImages[constructor.Constructor.nationality]}
          CarImage={CarsImages[constructor.Constructor.constructorId]}
          ConstructorImage={TeamsImages[constructor.Constructor.constructorId]}
          driver1={DriversData[TeamsData[constructor.Constructor.constructorId].drivers[0]].name + " " + DriversData[TeamsData[constructor.Constructor.constructorId].drivers[0]].surname}
          driver1Image={DriversImages[TeamsData[constructor.Constructor.constructorId].drivers[0]]}
          driver2={DriversData[TeamsData[constructor.Constructor.constructorId].drivers[1]].name + " " + DriversData[TeamsData[constructor.Constructor.constructorId].drivers[1]].surname}
          driver2Image={DriversImages[TeamsData[constructor.Constructor.constructorId].drivers[1]]}
        />
      ))}
    </ScrollView>
  )
}

export default Teams
