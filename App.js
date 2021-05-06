import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from './screens/Home'
import Lab5 from './screens/Lab5'
import Settings from './screens/Settings'
import Lab3 from './screens/Lab3.js'
import { NavigationContainer } from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons'
const Tab = createBottomTabNavigator()
import First from './forTest/lab4'
import Lab6 from './forTest/Lab6'
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
        <Tab.Screen name="lab6" component={Lab6} />
        <Tab.Screen name="lab5" component={Lab5} />
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
