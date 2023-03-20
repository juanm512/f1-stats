import { View, Text } from "react-native"
import { Image } from "expo-image"

import { SubTitleWithFlag } from "../SubTitle"

const DriverContainer = ({
  position,
  points,
  ConstructorName,
  teamColor,
  flag,
  CarImage,
  ConstructorImage,
  driver1,
  driver1Image,
  driver2,
  driver2Image
}) => {
  return (
    <View
      key={ConstructorName}
      style={{
        marginVertical: 20,
        paddingVertical: 10,
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
          subTitle={ConstructorName} color={teamColor}
          flag={flag}
        />
      </View>
      <View style={{ alignItems: "end", marginHorizontal: 20, width: "90%", height: 202 }}>
        <View
          style={{
            width: "100%",
            height: 200,
            zIndex: 1
          }}
        >
          <Image
            contentFit="contain"
            contentPosition="bottom left"
            style={{
              width: "100%",
              height: 200,
              zIndex: 1
            }}
            source={CarImage}
          />
        </View>

        <View
          style={{
            width: "100%",
            height: 200,
            position: "absolute",
            top: 0,
            right: 0,
            zIndex: 0
          }}
        >
          <Image
            contentFit="contain"
            contentPosition="right"
            style={{
              width: "100%",
              height: "100%",
              zIndex: -1,
              opacity: 0.3,
              filter: "grayscale(100%) invert(1)"
            }}
            source={ConstructorImage}
          />
        </View>
      </View>
      <View style={{ marginHorizontal: 20 }}>

        <SubTitleWithFlag
          subTitle={driver1} color={teamColor}
          flag={driver1Image} flagW={50} flagH={50}
        />
        <SubTitleWithFlag
          subTitle={driver2} color={teamColor}
          flag={driver2Image} flagW={50} flagH={50}
        />
      </View>
    </View>
  )
}

export default DriverContainer
