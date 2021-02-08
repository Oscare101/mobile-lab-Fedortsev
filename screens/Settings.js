import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Variant = () => {
  let vari = (8127 % 6) + 1

  return <Text>variant - {vari}</Text>
}

const Settings = () => {
  return (
    <View style={styles.container}>
      <Text>lab 2</Text>
      <Variant />
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
})

export default Settings
