import { useState, useEffect } from "react"
import { fetchData } from "./getData"

export const getDrivers = async () => {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [drivers, setDrivers] = useState([])
  useEffect(() => {
    Promise.allSettled([
      fetchData("2023/drvers"),
      new Promise((resolve) => setTimeout(resolve, 2000))
    ])
      .then((result) => {
        if (result[0].status === "rejected") {
          throw new Error(result[0].reason.message)
        }
        setDrivers(result[0].value.MRData.DriverTable.Drivers)
      })
      .catch((error) => {
        console.log(error)
        setError(error.message)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [])

  return { loading, error, drivers }
}
