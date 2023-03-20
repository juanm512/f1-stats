import { View, Text, ScrollView } from "react-native"
import { useEffect, useState } from "react"

import { AntDesign } from "@expo/vector-icons"

import DriverContainer from "../components/Drivers/DriverContainer"
import { SubTitle } from "../components/SubTitle"
import { Title } from "../components/Title"

import { getFullURL } from "../utils/getFullURL"
import { CountriesImages } from "../utils/getCountriesImages"
import { DriversImages } from "../utils/getDriversData"
import { TeamsImages, TeamsData } from "../utils/getTeamsData"

const Drivers = () => {
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    global.fetch(getFullURL("current/driverStandings"))
      .then((res) => {
        if (!res.ok) throw new Error("Fetch failed")
        return res.json()
      })
      .then((res) => {
        const data = res.MRData.StandingsTable.StandingsLists
        const DriverStandings = data[0].DriverStandings

        setData({
          round: data[0].round,
          drivers: DriverStandings
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
              Drivers standing
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
      {data.drivers.map((driver) => (
        <DriverContainer
          key={driver.Driver.driverId}
          position={driver.position}
          points={driver.points}
          driverName={driver.Driver.givenName + " " + driver.Driver.familyName}
          teamName={driver.Constructors[0].name}
          teamColor={TeamsData[driver.Constructors[0].constructorId].color}
          flag={CountriesImages[driver.Driver.nationality]}
          driverImage={DriversImages[driver.Driver.driverId]}
          teamImage={TeamsImages[driver.Constructors[0].constructorId]}
        />
      ))}
    </ScrollView>
  )
}

export default Drivers
