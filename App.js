import React from "react"
import { StatusBar } from "expo-status-bar"
import { StyleSheet, View } from "react-native"
import { NativeRouter, Route, Routes } from "react-router-native"
import Constants from "expo-constants"

import Home from "./pages/Home.jsx"
import Calendar from "./pages/Calendar.jsx"
import Drivers from "./pages/Drivers.jsx"
import Champions from "./pages/Champions.jsx"
import Teams from "./pages/Teams.jsx"

import BottomNav from "./components/Navigation/BottomNav"
import TopNav from "./components/Navigation/TopNav.jsx"

export default function App() {
  return (
    <NativeRouter>
      <StatusBar style="light" />

      <View style={styles.globalContainer}>
        <TopNav />
        <Routes>
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
            path="/champions"
            element={<Champions />}
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
    paddingBottom: 0
  }
})

// #f61d00
// #3a1619
