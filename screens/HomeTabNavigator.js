import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import OnboardingScreen from './OnboardingScreen'
import LoginScreen from './LoginScreen'
import RegisterScreen from './RegisterScreen'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from './homeScreen'
import BookTableScreen from './BookTableScreen'
import DetailScreen from './DetailScreen'

const Stack = createNativeStackNavigator();

const HomeTabNavigator = () => {
  return (
    <Stack.Navigator >
        <Stack.Screen name='BookTable' component={BookTableScreen} />
        <Stack.Screen name='HomeScreen' component={HomeScreen} />
        <Stack.Screen name='Register' component={RegisterScreen} />
        
    </Stack.Navigator>
  )
}

export default HomeTabNavigator