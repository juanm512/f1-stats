import { AntDesign, Entypo } from "@expo/vector-icons"
import { View, TouchableOpacity, Text, StyleSheet } from "react-native"

const TopNav = () => {
  return (
    <View style={styles.topNavBar}>
      <View style={{ flexGrow: 0 }}>
        <TouchableOpacity style={styles.touchableTopNav}>
          <AntDesign
            name="back"
            size={24}
            color="white"
          />
        </TouchableOpacity>
      </View>
      <View style={{ flexGrow: 1, maxWidth: "60%" }}>
        <Text
          style={{
            color: "white",
            fontSize: 16,
            fontWeight: "600",
            textAlign: "center"
          }}
        >
          Gran premio de Barain
        </Text>
      </View>
      <View style={{ flexGrow: 0 }}>
        <TouchableOpacity style={styles.touchableTopNav}>
          <Entypo
            name="cog"
            size={24}
            color="white"
          />
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default TopNav

const styles = StyleSheet.create({
  topNavBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    height: 50,
    backgroundColor: "#161621",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 5
  },
  touchableTopNav: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: 48,
    height: 48,
    color: "white",
    backgroundColor: "#f61d0030",
    padding: 2
  }
})
