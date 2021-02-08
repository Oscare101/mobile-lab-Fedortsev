import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import CoordinateKF from '../src/CoordinateKF'
import TimeKF from '../src/TimeKF'
const Variant = () => {
  let vari = (8127 % 2) + 1
  return <Text style={styles.header}>variant - {vari}</Text>
}

const Home = () => {
  return (
    <View style={styles.container}>
      <Variant />
      <TimeKF />
      <CoordinateKF />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 100,
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
  },
})

export default Home
