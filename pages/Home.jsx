import { View, ScrollView, Text, Image as ImageN } from "react-native"
import { Image } from "expo-image"
import { LinearGradient } from "expo-linear-gradient"
import { AntDesign } from "@expo/vector-icons"

import SubTitleWithBorder from "../components/SubTitleWithBorder"
import Podium from "../components/Podium"
// import DriversList from "../components/Home/DriversList"

import { DriversImages, CarsImages } from "../utils/getImages.js"

const Home = () => {
  return (
    <ScrollView style={{
      width: "100%",
      height: "100%"
    }}
    >
      <View
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
          2023 season
        </Text>
      </View>

      {/*
        -Last race status
        -Podium (1st, 2nd, 3rd)
        -Fastest lap
        -Fastest pit stop
      */}
      <View>
        <SubTitleWithBorder title="Previous race - Round 1" />
        <View
          style={{
            flexDirection: "row",
            alignItems: "center"
          }}
        >
          <Text style={{
            fontFamily: "Formula1-Bold",
            color: "#fefefe",
            fontSize: 20,
            fontWeight: "500",
            textAlign: "left",
            padding: 20
          }}
          >
            Bahrain Grand Prix
          </Text>
          <AntDesign
            name="right" size={24} color="#f61d00"
          />
        </View>
        <Podium
          firstPlace={{
            name: "Max Ver",
            driver_image: DriversImages["max ver"],
            team: "Red Bull",
            team_color: "#3671C6"
          }}
          secondPlace={{
            name: "Ser Per",
            driver_image: DriversImages["ser per"],
            team: "Red Bull",
            team_color: "#3671C6"
          }}
          thirdPlace={{
            name: "Fer Alo",
            driver_image: DriversImages["fer alo"],
            team: "Aston Martin",
            team_color: "#358C75"
          }}
        />
        <View style={{
          fontSize: 20,
          fontWeight: "bold",
          textAlign: "left",
          marginHorizontal: 20,
          marginVertical: 30,
          paddingHorizontal: 20,
          paddingVertical: 20,
          borderRadius: 10
        }}
        >
          <LinearGradient
            colors={["#fc0", "transparent"]}
            style={{
              position: "absolute",
              left: 0,
              top: 0,
              zIndex: -1,
              height: "100%",
              width: "100%",
              borderRadius: 10
            }}
          />
          <Text style={{
            fontFamily: "Formula1-Regular",
            color: "#fff",
            fontSize: 20,
            textAlign: "center",
            marginBottom: 10
          }}
          >
            Fastest Pit Stop
          </Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "start",
              justifyContent: "space-between"
            }}
          >
            <View style={{
              flexDirection: "column",
              alignItems: "start"
            }}
            >
              <View style={{
                flexDirection: "row",
                alignItems: "start"
              }}
              >
                <Text style={{
                  fontFamily: "Formula1-Bold",
                  color: "#fff",
                  fontSize: 50,
                  fontWeight: "bold",
                  textAlign: "left"
                }}
                >
                  1
                </Text>
                <Text style={{
                  fontFamily: "Formula1-Bold",
                  color: "#fff",
                  fontSize: 30,
                  fontWeight: "bold",
                  textAlign: "left"
                }}
                >
                  st
                </Text>
              </View>
              <Text style={{
                fontFamily: "Formula1-Bold",
                color: "#f61d00",
                fontSize: 25,
                fontWeight: "bold",
                textAlign: "left"
              }}
              >
                2.22
              </Text>
            </View>
            <View
              style={{
                flexDirection: "column",
                alignItems: "end",
                flexGrow: 1
              }}
            >
              <View style={{
                flexDirection: "row-reverse",
                alignItems: "center",
                gap: 10,
                justifyContent: "flex-end"
              }}
              >
                <Text style={{
                  fontFamily: "Formula1-Bold",
                  color: "#f61d00",
                  fontSize: 20,
                  textAlign: "right"
                }}
                >
                  Ferrari
                </Text>
                <Text style={{
                  fontFamily: "Formula1-Regular",
                  color: "#fff",
                  fontSize: 15,
                  textAlign: "right"
                }}
                >
                  Leclerc
                </Text>
              </View>
              <Image
                style={{
                  width: "100%",
                  height: 100,
                  transform: "scaleX(-1)",
                  marginRight: -20
                }}
                contentFit="contain"
                contentPosition="right"
                source={CarsImages.Ferrari}
              />
            </View>
          </View>
        </View>
        <Text style={{
          color: "#fff",
          fontSize: 20,
          fontWeight: "bold",
          textAlign: "left",
          padding: 20
        }}
        >
          Fastest pit stop: Mercedes
        </Text>
      </View>

      {/* next race and link to calendar */}

      {/* short drivers standing  (up to 5 pos) */}
      {/* short Constructor Standings  (up to 5 pos) */}

      {/* <DriversList /> */}

    </ScrollView>
  )
}

export default Home
