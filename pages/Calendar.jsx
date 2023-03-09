import { View, Text, ActivityIndicator } from "react-native"

const Calendar = () => {
  return (
    <View>
      <Text>
        Calendar
        <ActivityIndicator
          size="large"
          color="#faf2f3"
        />
      </Text>
    </View>
  )
}

export default Calendar
