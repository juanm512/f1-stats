import { View, Text } from "react-native"

const SubTitleWithBorder = ({ title }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        marginTop: 20,
        alignItems: "center"
      }}
    >
      <Text style={{
        fontFamily: "Formula1-Regular",
        flexGrow: 1,
        flexShrink: 0,
        color: "#fff",
        fontSize: 11,
        fontWeight: "600",
        textAlign: "left",
        marginLeft: 20
      }}
      >
        {title}
      </Text>
      <View
        style={{
          flexShrink: 1,
          height: 2,
          width: "100%",
          backgroundColor: "#fff",
          marginTop: 3,
          marginLeft: 10,
          marginRight: 20
        }}
      />
    </View>
  )
}

export default SubTitleWithBorder
