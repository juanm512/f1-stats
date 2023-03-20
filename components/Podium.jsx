import { View, Text, Image as ImageN } from "react-native"
import { Image } from "expo-image"

import linesSVG from "../assets/bg/lines.svg"

const Podium = (
  {
    firstPlace,
    secondPlace,
    thirdPlace
  }
) => {
  return (
    <View style={{
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "end",
      gap: 10,
      marginHorizontal: 20,
      marginTop: 10
    }}
    >
      <View style={{
        flexBasis: "33%",
        height: 150,
        flexDirection: "column",
        justifyContent: "end",
        alignItems: "center"
        // borderRadius: 10
        // borderWidth: 1,
        // borderColor: "#fff",
        // overflow: "hidden"
      }}
      >
        <View
          style={{
            width: "100%",
            height: "100%",
            marginTop: 10
          }}
        >
          <ImageN
            contentFit="cover"
            style={{ width: "100%", height: "60%", borderRadius: 10, tintColor: secondPlace.team_color, position: "absolute", bottom: 0 }}
            source={linesSVG}
          />
          <Image
            contentFit="contain"
            contentPosition="bottom"
            style={{ minWidth: 70, height: 150 }}
            source={secondPlace.driver_image}
          />
        </View>
        <Text style={{
          color: secondPlace.team_color,
          fontSize: 12,
          fontWeight: "700",
          fontFamily: "Formula1-Regular",
          textAlign: "center",
          width: "100%",
          paddingVertical: 3,
          borderTopWidth: 2,
          borderTopColor: secondPlace.team_color
        }}
        >
          {secondPlace.name}
        </Text>
      </View>
      <View style={{
        flexBasis: "33%",
        height: 180,
        flexDirection: "column",
        justifyContent: "end",
        alignItems: "center",
        borderRadius: 10
        // borderWidth: 1,
        // borderColor: "#fff",
        // overflow: "hidden"
      }}
      >
        <View
          style={{
            width: "100%",
            height: "90%",
            marginTop: 10
          }}
        >
          <ImageN
            contentFit="cover"
            style={{ width: "100%", height: "70%", borderRadius: 10, tintColor: secondPlace.team_color, position: "absolute", bottom: 0 }}
            source={linesSVG}
          />
          <Image
            contentFit="contain"
            contentPosition="bottom"
            style={{ minWidth: 80, height: 180 }}
            source={firstPlace.driver_image}
          />
        </View>
        <Text style={{
          color: secondPlace.team_color,
          fontSize: 12,
          fontWeight: "700",
          fontFamily: "Formula1-Regular",
          textAlign: "center",
          width: "100%",
          paddingVertical: 5,
          borderTopWidth: 3,
          borderTopColor: secondPlace.team_color
        }}
        >
          {firstPlace.name}
        </Text>
      </View>
      <View style={{
        flexBasis: "33%",
        height: 120,
        flexDirection: "column",
        justifyContent: "end",
        alignItems: "center",
        borderRadius: 10
        // borderWidth: 1,
        // borderColor: "#fff",
        // overflow: "hidden"
      }}
      >
        <View
          style={{
            width: "100%",
            height: "90%",
            marginTop: 10

          }}
        >
          <ImageN
            contentFit="cover"
            style={{ width: "100%", height: "65%", borderRadius: 10, tintColor: thirdPlace.team_color, position: "absolute", bottom: 0 }}
            source={linesSVG}
          />
          <Image
            contentFit="contain"
            contentPosition="bottom"
            style={{ minWidth: 60, height: "100%" }}
            source={thirdPlace.driver_image}
          />
        </View>
        <Text style={{
          color: thirdPlace.team_color,
          fontSize: 12,
          fontWeight: "700",
          fontFamily: "Formula1-Regular",
          textAlign: "center",
          width: "100%",
          paddingVertical: 1,
          borderTopWidth: 1,
          borderTopColor: thirdPlace.team_color
        }}
        >
          {thirdPlace.name}
        </Text>
      </View>
    </View>
  )
}

export default Podium
