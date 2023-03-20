import React from "react"
import { StatusBar } from "expo-status-bar"
import { StyleSheet, View } from "react-native"
import { NativeRouter, Route, Routes } from "react-router-native"
import Constants from "expo-constants"
import { useFonts } from "expo-font"

import Home from "./pages/Home.jsx"
import Calendar from "./pages/Calendar.jsx"
import Drivers from "./pages/Drivers.jsx"
import Teams from "./pages/Teams.jsx"

import BottomNav from "./components/Navigation/BottomNav"
// import TopNav from "./components/Navigation/TopNav.jsx"

export default function App() {
  useFonts({
    "Formula1-Black": require("./assets/font/Formula1-Black.ttf"),
    "Formula1-Bold": require("./assets/font/Formula1-Bold.ttf"),
    "Formula1-Regular": require("./assets/font/Formula1-Regular.ttf"),
    "Formula1-Wide": require("./assets/font/Formula1-Wide.ttf")
  })

  return (
    <NativeRouter>
      <StatusBar style="light" />

      <View style={styles.globalContainer}>
        {/* <TopNav /> */}
        <Routes style={{ width: "100%", paddingBottom: 54 }}>
          <Route
            exact
            path="/"
            element={<Home />}
          />
          <Route
            path="/calendar"
            element={<Calendar />}
          />
          <Route
            path="/drivers"
            element={<Drivers />}
          />
          <Route
            path="/teams"
            element={<Teams />}
          />
        </Routes>
        <BottomNav />
      </View>
    </NativeRouter>
  )
}

const styles = StyleSheet.create({
  globalContainer: {
    flex: 1,
    backgroundColor: "#161621",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: Constants.statusBarHeight,
    paddingBottom: 54
  }
})

// #f61d00
// #3a1619
