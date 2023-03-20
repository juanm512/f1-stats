import { View, Text, Image as ImageN } from "react-native"
import { Image } from "expo-image"

import { SubTitle, SubTitleWithFlag } from "../SubTitle"

const DriverContainer = ({
  position,
  points,
  driverName,
  teamName,
  teamColor,
  flag,
  driverImage,
  teamImage
}) => {
  return (
    <View
      key={driverName}
      style={{
        marginVertical: 20,
        borderBottomWidth: 3,
        borderBottomColor: teamColor
      }}
    >
      {/* <SubTitleWithBorder
        titlePos="right"
        subTitle=" "
      /> */}
      <View
        style={{
          alignItems: "start",
          marginVertical: 15,
          marginHorizontal: 20,
          paddingVertical: 5
        }}
      >
        <View style={{
          width: "100%",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between"
        }}
        >
          <Text style={{
            fontFamily: "Formula1-Wide",
            color: "#fefefe",
            fontSize: 48,
            fontWeight: "500",
            textAlign: "left"
          }}
          >
            {position}
          </Text>

          <View>
            <Text style={{
              fontFamily: "Formula1-Bold",
              color: "#fefefe70",
              fontSize: 32,
              fontWeight: "500",
              textAlign: "right"
            }}
            >
              {points}
            </Text>
            <Text style={{
              fontFamily: "Formula1-Bold",
              color: "#fefefe70",
              fontSize: 16,
              fontWeight: "500",
              textAlign: "right",
              backgroundColor: "#525252",
              borderRadius: 5,
              paddingHorizontal: 5,
              paddingVertical: 2
            }}
            >
              points
            </Text>
          </View>
        </View>

        <SubTitleWithFlag
          subTitle={driverName} color={teamColor}
          flag={flag}
        />
        <SubTitle
          subTitle={teamName} textStyle={{ color: "#f3f3f370" }}
        />
      </View>
      <View style={{ alignItems: "end", marginHorizontal: 20, width: "90%", height: 202 }}>
        <ImageN
          contentFit="contain"
          style={{
            width: 200,
            height: 200,
            zIndex: 1,
            position: "absolute",
            bottom: 0,
            right: 0
          }}
          source={driverImage}
        />
        <Image
          contentFit="contain"
          contentPosition="left"
          style={{
            width: "100%",
            height: "100%",
            zIndex: -1,
            opacity: 0.3,
            filter: "grayscale(100%) invert(1)"
          }}
          source={teamImage}
        />
      </View>

    </View>
  )
}

export default DriverContainer
