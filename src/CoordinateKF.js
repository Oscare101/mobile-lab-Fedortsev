import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Geolocation from 'react-native-geolocation-service'

let degrees = 4 // -90 90
let min = 24 // 0 59
let sec = 15 // 0 59
let longmin, longsec, long
const Direction = () => {
  longsec = (sec / 60) * 100
  longmin = (min + longsec / 100) / 60
  long = degrees + longmin
  long = long.toFixed(6)
  return <Text>output: {long}</Text>
}

const CoordinateKF = () => {
  return (
    <View style={styles.container}>
      <View style={styles.time}>
        <Text style={styles.title}>Task for coordinate</Text>
        <Text>
          imput: {degrees}&deg;{min}&prime;{sec}&Prime;N
        </Text>
        <Direction />
      </View>
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

export default CoordinateKF
