import { AntDesign } from "@expo/vector-icons"
import { View, Text } from "react-native"

export const Title = ({
  children
}) => {
  return (
    <Text style={{
      fontFamily: "Formula1-Bold",
      color: "#fefefe",
      fontSize: 20,
      fontWeight: "500",
      textAlign: "left"
    }}
    >
      {children}
    </Text>
  )
}

export const TitleWithArrow = ({ children }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center"
      }}
    >
      <Title>
        {children}
      </Title>
      <AntDesign
        name="right" size={24} color="#f61d00"
      />
    </View>
  )
}
