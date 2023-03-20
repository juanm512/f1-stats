import { AntDesign } from "@expo/vector-icons"
import { View, Text } from "react-native"

export const Title = ({
  children, style
}) => {
  return (
    <Text style={{
      fontFamily: "Formula1-Bold",
      color: "#fefefe",
      fontSize: 20,
      fontWeight: "500",
      textAlign: "left",
      ...style
    }}
    >
      {children}
    </Text>
  )
}

export const TitleWithArrow = ({ children, style }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center"
      }}
    >
      <Title style={style}>
        {children}
      </Title>
      <AntDesign
        name="right" size={style?.fontSize || 24} color="#f61d00"
      />
    </View>
  )
}
