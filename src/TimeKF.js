import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

let date = new Date().getDate() //To get the Current Date
let month = new Date().getMonth() + 1 //To get the Current Month
let year = new Date().getFullYear() //To get the Current Year
let hours = new Date().getHours() //To get the Current Hours
let min = new Date().getMinutes() //To get the Current Minutes
let sec = new Date().getSeconds() //To get the Current Seconds

let minus = 60
let plus = 30
let minusMin, plusMin, plusHour, minusHour
const Plus = () => {
  plusMin = min + plus
  plusHour = hours
  console.log(plusMin)
  if (plusMin > 60) {
    plusMin = plusMin - 60
    plusHour = plusHour + 1
  }
  return (
    <Text>
      plus: current time + {plus} {'\n'} {plusHour}:{plusMin}.{sec}
    </Text>
  )
}

const Minus = () => {
  minusMin = min - minus
  minusHour = hours
  if (minusMin < 0) {
    minusMin = minusMin + 60
    minusHour = minusHour - 1
  }
  return (
    <Text>
      plus: current time - {minus} {'\n'} {minusHour}:{minusMin}.{sec}
    </Text>
  )
}

const TimeKF = () => {
  return (
    <View style={styles.time}>
      <Text style={styles.title}>
        Time task for variant 1, {'\n'} was made by mistake
      </Text>
      <Text>
        {date}, {month}, {year} {'\n'} {hours}:{min}.{sec}
      </Text>

      <Plus />
      <Minus />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  time: {
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 20,
    padding: 20,
  },
  title: {
    fontSize: 18,
    fontStyle: 'italic',
  },
})

export default TimeKF
