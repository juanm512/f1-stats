import { View, Text } from "react-native"

export const SubTitle = ({
  children,
  style,
  textStyle,
  color = "#fff",
  subTitle = "Subtitle example ..."
}) => {
  return (
    <View
      style={{
        alignItems: "center",
        ...style
      }}
    >
      <Text style={{
        fontFamily: "Formula1-Regular",
        color,
        fontSize: 15,
        fontWeight: "400",
        textAlign: "left",
        ...textStyle
      }}
      >
        {subTitle}
      </Text>
      {children}
    </View>
  )
}

export const SubTitleWithBorder = ({ color, subTitle, titlePos = "left" }) => {
  return (
    <SubTitle
      subTitle={subTitle}
      style={{
        flexDirection: titlePos === "left" ? "row" : "row-reverse",
        marginTop: 20
      }}
      color={color}
      textStyle={{
        fontFamily: "Formula1-Regular",
        flexGrow: 1,
        flexShrink: 0,
        color: "#fff",
        fontSize: 11,
        fontWeight: "600",
        textAlign: "left",
        marginLeft: titlePos === "left" ? 20 : 0,
        marginRight: titlePos === "left" ? 0 : 20
      }}
    >
      <View
        style={{
          flexShrink: 1,
          height: 2,
          width: "100%",
          backgroundColor: "#fff",
          marginTop: 3,
          marginRight: titlePos === "left" ? 20 : 10,
          marginLeft: titlePos === "left" ? 10 : 20
        }}
      />
    </SubTitle>

  )
}
