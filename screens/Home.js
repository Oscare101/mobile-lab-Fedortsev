import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Home = () => {
  return (
    <View style={styles.container}>
      <Text style={{ textAlign: 'center', fontSize: 22 }}>
        Fedortsev Kyryl {'\n'}Group IO-81{'\n'}Number of students book 8127{' '}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },
})

export default Home
