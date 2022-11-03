import { StyleSheet } from 'react-native';
import { TailwindProvider } from 'tailwindcss-react-native';
import { NavigationContainer, } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthStack from './navigation/AuthStack';
const Stack = createNativeStackNavigator();

export default function App() {
  return ( 
          <NavigationContainer>
            <TailwindProvider>
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
