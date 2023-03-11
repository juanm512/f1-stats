import { Text, FlatList, View } from "react-native"
import { useEffect, useState } from "react"
import LoadingBG from "../LoadingBG"
import { fetchData } from "../../utils/getData"

const DriversList = () => {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [drivers, setDrivers] = useState([])
  useEffect(() => {
    Promise.allSettled([
      fetchData("current/driverStandings"),
      new Promise((resolve) => setTimeout(resolve, 2000))
    ])
      .then((result) => {
        if (result[0].status === "rejected") throw new Error(result[0].reason.message)
        console.log(result[0].value.MRData.StandingsTable.StandingsLists[0])
        setDrivers(result[0].value.MRData.StandingsTable.StandingsLists[0].DriverStandings)
      })
      .catch((error) => {
        console.log(error)
        setError(error.message)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [])

  return (
    <View>
      {loading
        ? <LoadingBG />
        : error
          ? <Text>{error}</Text>
          : <FlatList
              data={drivers}
              renderItem={({ item }) => (
                <Text
                  style={{
                    fontSize: 20,
                    fontWeight: "bold",
                    color: "#fff",
                    textAlign: "center",
                    padding: 20
                  }}
                >
                  {item.Driver.givenName + " " + item.Driver.familyName}
                </Text>
              )}
              keyExtractor={(item) => item.Driver.givenName}
            />}

    </View>
  )
}

export default DriversList
