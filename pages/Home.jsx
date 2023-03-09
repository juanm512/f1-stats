import { View, Text } from "react-native"
import { getDrivers } from "../utils/getData"
import { useEffect, useState } from "react"
import LoadingBG from "../components/LoadingBG"

const Home = () => {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [drivers, setDrivers] = useState([])
  useEffect(() => {
    Promise.allSettled([
      getDrivers(),
      new Promise((resolve) => setTimeout(resolve, 1000))
    ])
      .then(([result]) => {
        setDrivers(result.value.Drivers || [])
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
          : <Text
              style={{
                fontSize: 30,
                fontWeight: "bold",
                color: "#fff",
                textAlign: "center",
                padding: 20
              }}
            >
            {
                drivers?.map((driver) => {
                  return (
                    <Text
                      key={driver.givenName}
                      style={{
                        fontSize: 20,
                        fontWeight: "bold",
                        color: "#fff",
                        textAlign: "center",
                        padding: 20
                      }}
                    >
                      {driver.givenName + " " + driver.familyName}
                    </Text>
                  )
                })
              }
            {/* eslint-disable-next-line react/jsx-indent */}
            </Text>}
    </View>
  )
}

export default Home
