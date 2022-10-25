import { StatusBar } from 'expo-status-bar';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import { TailwindProvider } from 'tailwindcss-react-native';
import { NavigationContainer, TabRouter, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import MyTab from './navigation/Tab';
import AppStack from './navigation/AppStack';
import AuthStack from './navigation/AuthStack';
import { useState } from 'react';




const Stack = createNativeStackNavigator();

export default function App() {
  const [token, setToken] = useState('')
  const  [isLoading,setIsLoading] = useState(false)

  if(isLoading){
    return  (
      <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
        <ActivityIndicator size={'large'}/> 
      </View>
    )
  }

  return (
    <NavigationContainer>
      <TailwindProvider>
        {token ? <AppStack /> : <AuthStack />}
      </TailwindProvider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
