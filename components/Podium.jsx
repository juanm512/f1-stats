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
      marginTop: 20
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
            height: "90%",
            marginTop: 10
          }}
        >
          <ImageN
            contentFit="cover"
            style={{ width: "100%", height: "100%", borderRadius: 10, tintColor: secondPlace.team_color, position: "absolute" }}
            source={linesSVG}
          />
          <Image
            contentFit="cover"
            contentPosition="bottom"
            style={{ width: "100%", height: "100%" }}
            source={secondPlace.driver_image}
          />
        </View>
        <Text style={{
          color: secondPlace.team_color,
          fontSize: 15,
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
            style={{ width: "100%", height: "100%", borderRadius: 10, tintColor: secondPlace.team_color, position: "absolute" }}
            source={linesSVG}
          />
          <Image
            contentFit="cover"
            contentPosition="bottom"
            style={{ width: "100%", height: "100%" }}
            source={firstPlace.driver_image}
          />
        </View>
        <Text style={{
          color: secondPlace.team_color,
          fontSize: 15,
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
            style={{ width: "100%", height: "100%", borderRadius: 10, tintColor: thirdPlace.team_color, position: "absolute" }}
            source={linesSVG}
          />
          <Image
            contentFit="cover"
            contentPosition="bottom"
            style={{ width: "100%", height: "100%", overflow: "visible" }}
            source={thirdPlace.driver_image}
          />
        </View>
        <Text style={{
          color: thirdPlace.team_color,
          fontSize: 15,
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
