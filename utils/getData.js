const URL = "http://ergast.com/api/f1/"
const getFullURL = (path) => `${URL}${path}.json`

export const getDrivers = async () => {
  try {
    const response = await global.fetch(getFullURL("2023/drivers"))
    const data = await response.json()
    return data.MRData.DriverTable
  } catch (error) {
    console.log(error)
    throw Error("Error getting drivers")
  }
}
