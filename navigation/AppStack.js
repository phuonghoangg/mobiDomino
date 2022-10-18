import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MyTab from './Tab';

const Stack = createNativeStackNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator >
        <Stack.Screen name='HomeTab' component={MyTab} />
    </Stack.Navigator>
  )
}

export default AppStack