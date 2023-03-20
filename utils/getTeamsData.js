export const CarsImages = {
  // alfa: require("../assets/cars/alfa_car.png"),
  // alphatauri: require("../assets/cars/alphatauri_car.avif"),
  // alpine: require("../assets/cars/alpine_car.avif"),
  // aston_martin: require("../assets/cars/aston_martin_car.png"),
  // ferrari: require("../assets/cars/ferrari_car.avif"),
  // haas: require("../assets/cars/haas_car.avif"),
  // mclaren: require("../assets/cars/mclaren_car.avif"),
  // mercedes: require("../assets/cars/mercedes_car.avif"),
  // red_bull: require("../assets/cars/red_bull_car.png"),
  // williams: require("../assets/cars/williams_car.avif")
  mercedes: "https://i.ibb.co/t25KpZf/mercedes-car.png",
  red_bull: "https://i.ibb.co/fQxSD46/red-bull-car.png",
  williams: "https://i.ibb.co/hsnCfm7/williams-car.png",
  alphatauri: "https://i.ibb.co/xmCw5QD/alphatauri-car.png",
  alpine: "https://i.ibb.co/1dZ11KX/alpine-car.png",
  ferrari: "https://i.ibb.co/tszh8Hx/ferrari-car.png",
  haas: "https://i.ibb.co/qjh0S6P/haas-car.png",
  mclaren: "https://i.ibb.co/LnpqZP7/mclaren-car.png",
  aston_martin: "https://i.ibb.co/KNGYqNn/aston-martin-car.png",
  alfa: "https://i.ibb.co/8sPZfsP/alfa-car.png"
}

// export const TeamsTinyImages = {
//   alfa: require("../assets/teams/tiny/alfa_logo_tiny.avif"),
//   alphatauri: require("../assets/teams/tiny/alphatauri_logo_tiny.avif"),
//   alpine: require("../assets/teams/tiny/alpine_logo_tiny.avif"),
//   aston_martin: require("../assets/teams/tiny/aston_martin_logo_tiny.png"),
//   ferrari: require("../assets/teams/tiny/ferrari_logo_tiny.avif"),
//   haas: require("../assets/teams/tiny/haas_logo_tiny.avif"),
//   mclaren: require("../assets/teams/tiny/mclaren_logo_tiny.avif"),
//   mercedes: require("../assets/teams/tiny/mercedes_logo_tiny.avif"),
//   red_bull: require("../assets/teams/tiny/red_bull_logo_tiny.png"),
//   williams: require("../assets/teams/tiny/williams_logo_tiny.avif")
// }

export const TeamsImages = {
  alfa: require("../assets/teams/alfa.png"),
  alphatauri: require("../assets/teams/alphatauri.svg"),
  alpine: require("../assets/teams/alpine.png"),
  aston_martin: require("../assets/teams/aston_martin.png"),
  ferrari: require("../assets/teams/ferrari.png"),
  haas: require("../assets/teams/haas.png"),
  mclaren: require("../assets/teams/mclaren.png"),
  mercedes: require("../assets/teams/mercedes.png"),
  red_bull: require("../assets/teams/red_bull.svg"),
  williams: require("../assets/teams/williams.webp")
}

export const TeamsData = {
  alfa: {
    teamId: "alfa",
    name: "Alfa Romeo",
    drivers: ["bottas", "zhou"],
    color: "#C92D4B"
  },
  alphatauri: {
    teamId: "alphatauri",
    name: "AlphaTauri",
    drivers: ["tsunoda", "de_vries"],
    color: "#5E8FAA"
  },
  alpine: {
    teamId: "alpine",
    name: "Alpine F1 Team",
    drivers: ["gasly", "ocon"],
    color: "#2293D1"
  },
  aston_martin: {
    teamId: "aston_martin",
    name: "Aston Martin",
    drivers: ["alonso", "stroll"],
    color: "#358C75"
  },
  ferrari: {
    teamId: "ferrari",
    name: "Ferrari",
    drivers: ["leclerc", "sainz"],
    color: "#F91536"
  },
  haas: {
    teamId: "haas",
    name: "Haas F1 Team",
    drivers: ["kevin_magnussen", "hulkenberg"],
    color: "#B6BABD"
  },
  mclaren: {
    teamId: "mclaren",
    name: "McLaren",
    drivers: ["norris", "piastri"],
    color: "#F58020"
  },
  mercedes: {
    teamId: "mercedes",
    name: "Mercedes",
    drivers: ["hamilton", "russell"],
    color: "#6CD3BF"
  },
  red_bull: {
    teamId: "red_bull",
    name: "Red Bull",
    drivers: ["max_verstappen", "perez"],
    color: "#3671C6"
  },
  williams: {
    teamId: "williams",
    name: "Williams",
    drivers: ["albon", "sargeant"],
    color: "#37BEDD"
  }
}

export const getConstructorByDriverId = (driverId) => {
  const team = Object.values(TeamsData).find(
    (team) => team.drivers[0] === driverId || team.drivers[1] === driverId
  )
  return team
}
