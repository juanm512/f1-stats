import { Image as ImageN, View } from "react-native"
import { Image } from "expo-image"

export const SimpleMap = ({ circuitImage }) => {
  return (
    <View style={{
      flexDirection: "row",
      alignItems: "center",
      borderRadius: 20,
      overflow: "hidden",
      backgroundColor: "#ffffff1f"
    }}
    >
      <ImageN
        resizeMode="cover"
        style={{ width: "100%", height: 210, position: "absolute" }}
        source={require("../assets/bg/pluses.svg")}
      />
      <Image
        contentFit="contain"
        contentPosition="center"
        style={{
          width: "100%",
          height: 200
        }}
        source={circuitImage}
      />
    </View>
  )
}
