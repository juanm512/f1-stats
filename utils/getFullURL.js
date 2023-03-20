const URL = "http://ergast.com/api/f1/"
export const getFullURL = (path, query) =>
  `${URL}${path}.json${query ? `?${query}` : ""}`
