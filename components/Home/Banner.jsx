import { LinearGradient } from "expo-linear-gradient"
import { View, Text, Image as ImageN } from "react-native"

export const Banner = ({ sesionYear }) => {
  return (
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
        source={require("../../assets/logos/f1_logo.svg")}
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
        {sesionYear} season
      </Text>
    </View>
  )
}
