import React from 'react'
import { StyleSheet, Text, View, Dimensions } from 'react-native'
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from 'react-native-chart-kit'

const Graph = () => {
  return (
    <LineChart
      data={{
        labels: ['-3', '-2', '-1', '0', '1', '2', '3'],
        datasets: [
          {
            data: [-27, -8, -1, 0, 1, 8, 27],
            strokeWidth: 4,
          },
        ],
      }}
      width={Dimensions.get('window').width - 16} // from react-native
      height={220}
      chartConfig={{
        backgroundGradientFrom: '#fff',
        backgroundGradientTo: '#fff',
        decimalPlaces: 2, // optional, defaults to 2dp
        color: (opacity = 255) => `rgba(0, 0, 0, ${opacity})`,
        style: {
          borderRadius: 16,
        },
      }}
      style={{
        marginVertical: 8,
        borderRadius: 16,
      }}
    />
  )
}

const Graphics = () => {
  return (
    <View style={styles.container}>
      <Text>Task A:</Text>
      <Graph />
      <Text>Task B:</Text>
      <PieChart
        data={[
          {
            name: 'Yellow',
            population: 15,
            color: 'yellow',
            legendFontColor: 'black',
            legendFontSize: 15,
          },
          {
            name: 'Green',
            population: 25,
            color: 'green',
            legendFontColor: 'black',
            legendFontSize: 15,
          },
          {
            name: 'Grey',
            population: 45,
            color: 'grey',
            legendFontColor: 'black',
            legendFontSize: 15,
          },
          {
            name: 'Red',
            population: 10,
            color: 'red',
            legendFontColor: 'black',
            legendFontSize: 15,
          },
          {
            name: 'Purple',
            population: 5,
            color: 'purple',
            legendFontColor: 'black',
            legendFontSize: 15,
          },
        ]}
        width={Dimensions.get('window').width - 16}
        height={220}
        chartConfig={{
          backgroundColor: '#1cc910',
          backgroundGradientFrom: '#eff3ff',
          backgroundGradientTo: '#efefef',
          decimalPlaces: 2,
          color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          style: {
            borderRadius: 16,
          },
        }}
        style={{
          marginVertical: 8,
          borderRadius: 16,
        }}
        accessor="population"
        backgroundColor="transparent"
        paddingLeft="15"
        absolute //for the absolute number remove if you want percentage
      />
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

export default Graphics
