import { View, Text, SafeAreaView, Button } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'

const OnboardingScreen = () => {
  const navigation = useNavigation()
  useLayoutEffect(()=>{
    navigation.setOptions({
      headerShown: false,
    })
  },[])
  return (
    <SafeAreaView className="flex-1 justify-center items-center">
      <Text>OnboardingScreen</Text>
      <Button title='go to login' onPress={()=>navigation.navigate('Login')}></Button>
    </SafeAreaView>
  )
}

export default OnboardingScreen