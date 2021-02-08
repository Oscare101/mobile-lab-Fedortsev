import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Graphics from './Graphics'
import Circle from './Circle'

const Variant = () => {
  let vari = (8127 % 6) + 1
  return <Text>variant - {vari}</Text>
}

const Settings = () => {
  return (
    <View style={styles.container}>
      <Text>lab 2</Text>
      <Variant />
      <Graphics />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 50,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default Settings
