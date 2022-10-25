import { View, Text, SafeAreaView, Button, TouchableOpacity, Image } from 'react-native'
import {ArrowRightIcon, ChevronRightIcon} from 'react-native-heroicons/outline'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'

const OnboardingScreen = () => {
  const navigation = useNavigation()
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    })
  }, [])
  return (
    <SafeAreaView className="">
      <View >
        <Image className="object-right relative" source={{ uri: 'https://thumbs.dreamstime.com/b/pizza-food-menu-restaurant-cafe-design-doodle-style-template-flyer-baner-pizza-food-menu-restaurant-cafe-design-158123197.jpg' }}
          style={{ width: 450, height: 700,left:-39 , }} />
        <TouchableOpacity  className=" bg-sky-600/30 h-14 w-80 absolute bottom-10 ml-11 rounded-xl flex-row justify-around " onPress={() => navigation.navigate('Login')}>
          <Text className="text-center pt-3 text-gray-400 text-xl font-norm italic">Go to Login</Text>
          <Text className="pt-4 "><ChevronRightIcon  size={20} color="#fff" /></Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default OnboardingScreen