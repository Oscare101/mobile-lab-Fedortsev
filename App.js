import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from './screens/Home'
import Settings from './screens/Settings'
import Lab3 from './screens/Lab3.js'
import { NavigationContainer } from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons'
const Tab = createBottomTabNavigator()
import First from './forTest/lab4'
export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
      // screenOptions={({ route }) => ({
      //   tabBarIcon: () => {
      //     let iconName
      //     if (route.name == 'Home') {
      //       iconName = 'rocket'
      //     } else if ((route.name = 'lab2')) {
      //       iconName = 'search'
      //     } else if ((route.name = 'lab3')) {
      //       iconName = 'home'
      //     }
      //     return <Ionicons name={iconName} size={30} color="black" />
      //   },
      // })}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="lab2" component={Settings} />
        <Tab.Screen name="lab3" component={First} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

// export default function App() {
//   const Tab = createBottomTabNavigator()
//   return (
//     <NavigationContainer>
//       <Tab.Navigator
//         screenOptions={({ route }) => ({
//           tabBarIcon: () => {
//             let iconName
//             if (route.name == 'Home') {
//               iconName = 'rocket'
//             } else if ((route.name = 'Lab2')) {
//               iconName = 'search'
//             } else if ((route.name = 'Lab3')) {
//               iconName = 'home'
//             }
//             return <Ionicons name={iconName} size={30} color="black" />
//           },
//         })}
//       >
//         <Tab.Screen name="Home" component={Home} />
//         <Tab.Screen name="Lab2" component={Settings} />
//         <Tab.Screen name="Lab3" component={Lab3} />
//       </Tab.Navigator>
//     </NavigationContainer>
//   )
// }
