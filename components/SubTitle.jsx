import { View, Text, Image } from "react-native"

export const SubTitle = ({
  children,
  style,
  textStyle,
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
      textStyle={{
        fontFamily: "Formula1-Regular",
        flexGrow: 1,
        flexShrink: 0,
        color: color || "#fff",
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

export const SubTitleWithFlag = ({ color, subTitle, flag, flagW = 40, flagH = 30 }) => {
  return (
    <SubTitle
      subTitle={subTitle}
      style={{
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 10
      }}
      textStyle={{
        fontFamily: "Formula1-Regular",
        flexGrow: 0,
        flexShrink: 1,
        color: color || "#fff",
        fontSize: 15,
        fontWeight: "600",
        textAlign: "left"
      }}
    >
      <Image source={flag} style={{ width: flagW, height: flagH, marginLeft: 10, borderRadius: 4 }} />
    </SubTitle>

  )
}
