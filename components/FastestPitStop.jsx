import { View, Text } from "react-native"
import { Image } from "expo-image"
import { LinearGradient } from "expo-linear-gradient"

import { CarsImages, getConstructorByDriverId } from "../utils/getTeamsData.js"
import { DriversData } from "../utils/getDriversData.js"

// the children inm the component below work for expansion.
// Allow the integration of a table with the rest of pit stops

export const FastestPitStop = ({ data, children }) => {
  const { driverId, duration } = data
  const constructor = getConstructorByDriverId(driverId)
  const driver = DriversData[driverId]
  return (
    <View style={{
      marginHorizontal: 20,
      marginVertical: 30,
      paddingHorizontal: 20,
      paddingVertical: 20,
      borderRadius: 10
    }}
    >
      <LinearGradient
        colors={["#fc0", "transparent"]}
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          zIndex: -1,
          height: "100%",
          width: "100%",
          borderRadius: 10
        }}
      />
      <Text style={{
        fontFamily: "Formula1-Regular",
        color: "#fff",
        fontSize: 20,
        textAlign: "center",
        marginBottom: 10
      }}
      >
        Fastest Pit Stop
      </Text>
      <View
        style={{
          flexDirection: "row",
          alignItems: "start",
          justifyContent: "space-between"
        }}
      >
        <View style={{
          flexDirection: "column",
          alignItems: "start"
        }}
        >
          <View style={{
            flexDirection: "row",
            alignItems: "start"
          }}
          >
            <Text style={{
              fontFamily: "Formula1-Bold",
              color: "#fff",
              fontSize: 50,
              fontWeight: "bold",
              textAlign: "left"
            }}
            >
              1
            </Text>
            <Text style={{
              fontFamily: "Formula1-Bold",
              color: "#fff",
              fontSize: 30,
              fontWeight: "bold",
              textAlign: "left"
            }}
            >
              st
            </Text>
          </View>
          <Text style={{
            fontFamily: "Formula1-Bold",
            color: constructor.color,
            fontSize: 25,
            fontWeight: "bold",
            textAlign: "left"
          }}
          >
            {duration}
          </Text>
        </View>
        <View
          style={{
            flexDirection: "column",
            alignItems: "end",
            flexShrink: 1
          }}
        >
          <View style={{
            flexDirection: "column",
            flexGrow: 0,
            alignItems: "end",
            gap: 5,
            justifyContent: "flex-end"
          }}
          >
            <Text style={{
              fontFamily: "Formula1-Bold",
              color: constructor.color,
              fontSize: 20,
              textAlign: "right"
            }}
            >
              {constructor.name}
            </Text>
            <Text style={{
              fontFamily: "Formula1-Regular",
              color: "#fff",
              fontSize: 15,
              textAlign: "right"
            }}
            >
              {driver.surname}
            </Text>
          </View>
          <View style={{
            width: "100%",
            flexGrow: 1,
            alignItems: "end",
            flexShrink: 1

          }}
          >
            <Image
              style={{
                maxWidth: 340,
                minWidth: 200,
                width: "100%",
                height: 100,
                alignSelf: "end",
                transform: "scaleX(-1)",
                marginRight: -20

              }}
              contentFit="contain"
              contentPosition="right"
              source={CarsImages[constructor.teamId]}
            />
          </View>
        </View>
      </View>
      {children}
    </View>
  )
}
