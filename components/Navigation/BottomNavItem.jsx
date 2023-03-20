import {
  Link,
  useLocation
} from "react-router-native"
import { TouchableOpacity, Text, StyleSheet, View } from "react-native"
import { LinearGradient } from "expo-linear-gradient"

const BottomNavItem = ({
  to,
  children,
  name
}) => {
  const location = useLocation()

  const isActive = location.pathname === to

  return (
    <Link
      component={TouchableOpacity}
      to={to}
      style={styles.touchableBottomNav}
    >
      <>
        {children}
        <Text style={{ color: "white", fontSize: 12, fontWeight: "400" }}>
          {name}
        </Text>
        {isActive && (
          <>
            <LinearGradient
            // Background Linear Gradient
              colors={["#f61d0030", "transparent"]}
              style={{
                position: "absolute",
                left: 0,
                bottom: 0,
                zIndex: -1,
                height: 54,
                width: "100%"
              }}
            />
            <View
              style={{
                position: "absolute",
                left: 0,
                top: 0,
                zIndex: -2,
                height: 3,
                width: "100%",
                backgroundColor: "#f61d00"
              }}
            />
          </>
        )}
      </>
    </Link>
  )
}

export default BottomNavItem

const styles = StyleSheet.create({
  touchableBottomNav: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    height: "100%",
    color: "white",
    // backgroundColor: "#f61d0030",
    paddingVertical: 4
  }
})
