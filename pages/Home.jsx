import { ScrollView } from "react-native"

import { Banner } from "../components/Home/Banner"
import { NextRace } from "../components/Home/NextRace"
import { PreviousRace } from "../components/Home/PreviousRace"

const Home = () => {
  return (
    <ScrollView style={{
      width: "100%",
      height: "100%"
    }}
    >
      {/* Banner */}
      <Banner sesionYear={
        new Date().getFullYear()
      }
      />

      {/*
        -Last race status
        -Podium (1st, 2nd, 3rd)
        -Fastest lap
        -Fastest pit stop
      */}
      <PreviousRace />

      {/* next race and link to calendar */}
      <NextRace />
    </ScrollView>
  )
}

export default Home
