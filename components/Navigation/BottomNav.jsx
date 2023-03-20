import { AntDesign, Entypo, MaterialCommunityIcons } from "@expo/vector-icons"
import { View, StyleSheet } from "react-native"
import BottomNavItem from "./BottomNavItem"

const Routes = [
  {
    name: "Home",
    path: "/",
    icon: <AntDesign name="home" size={24} color="white" />
  },
  {
    name: "Calendar",
    path: "/calendar",
    icon: <AntDesign name="calendar" size={24} color="white" />
  },
  // {
  //   name: "Champions",
  //   path: "/champions",
  //   icon: <Entypo name="trophy" size={24} color="white" />
  // },
  {
    name: "Drivers",
    path: "/drivers",
    icon: <MaterialCommunityIcons name="racing-helmet" size={24} color="white" />
  },
  {
    name: "Teams",
    path: "/teams",
    icon: <AntDesign name="team" size={24} color="white" />
  }
]

const BottomNav = () => {
  return (

    <View style={styles.bottomNavBar}>
      {Routes.map((route) => (
        <BottomNavItem
          key={route.name}
          to={route.path}
          name={route.name}
        >
          {route.icon}
        </BottomNavItem>
      ))}
    </View>
  )
}

export default BottomNav

const styles = StyleSheet.create({
  bottomNavBar: {
    position: "fixed",
    bottom: 0,
    flexDirection: "row",
    // justifyContent: "space-around",
    alignItems: "center",
    gap: 0,
    width: "100%",
    height: 54,
    backgroundColor: "#161621"
  // paddingHorizontal: 10
  }
})
