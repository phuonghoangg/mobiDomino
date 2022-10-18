import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { TailwindProvider } from 'tailwindcss-react-native';
import { NavigationContainer, TabRouter, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import MyTab from './navigation/Tab';
import AppStack from './navigation/AppStack';
import AuthStack from './navigation/AuthStack';




const Stack = createNativeStackNavigator();

export default function App() {
  return (
   <NavigationContainer>
     <TailwindProvider>
        {/* <AppStack /> */}
        <AuthStack />
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
