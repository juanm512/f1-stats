const URL = "http://ergast.com/api/f1/"
const getFullURL = (path) => `${URL}${path}.json`

export const fetchData = async (pathname) => {
  try {
    const response = await global.fetch(getFullURL(pathname))
    if (!response.ok) throw new Error("Fetch failed")

    const data = await response.json()
    return data
  } catch (error) {
    throw Error(error.message + " - Error getting data")
  }
}
