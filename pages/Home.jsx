import { View, ScrollView, Text, Image as ImageN, TouchableOpacity } from "react-native"
import { LinearGradient } from "expo-linear-gradient"
import { Link } from "react-router-native"

import { SubTitle, SubTitleWithBorder } from "../components/SubTitle"
import { TitleWithArrow } from "../components/Title"
import Podium from "../components/Podium"
import { SimpleMap } from "../components/SimpleMap"
import { FastestPitStop } from "../components/FastestPitStop"

import { DriversImages } from "../utils/getImages.js"

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
      <View
        style={{
          paddingVertical: 10
        }}
      >
        <SubTitleWithBorder subTitle="Previous race - Round 1" titlePos="left" />
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
              Bahrain Grand Prix
            </TitleWithArrow>
            <SubTitle
              subTitle="Sun 05 of March" color="#f61d00"
            />
          </>
        </Link>
        <Link to="/" style={{ marginHorizontal: 20 }}>
          <SimpleMap />
        </Link>
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
        <FastestPitStop />
      </View>

      {/* next race and link to calendar */}
      <View
        style={{
          paddingVertical: 10
        }}
      >
        <SubTitleWithBorder
          titlePos="right"
          subTitle="Next race - Round 2"
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
              Bahrain Grand Prix
            </TitleWithArrow>
            <SubTitle
              subTitle="Sun 05 of March" color="#f61d00"
            />
          </>
        </Link>
        <Link to="/" style={{ marginHorizontal: 20 }}>
          <SimpleMap />
        </Link>

      </View>
      {/* short drivers standing  (up to 5 pos) */}
      {/* short Constructor Standings  (up to 5 pos) */}

      {/* <DriversList /> */}

    </ScrollView>
  )
}

export default Home
