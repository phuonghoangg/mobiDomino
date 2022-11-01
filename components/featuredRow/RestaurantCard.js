import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { StarIcon,MapPinIcon } from 'react-native-heroicons/outline'
import { useNavigation } from '@react-navigation/native'

const RestaurantCard = ({data}) => {
    const navigation = useNavigation();
    
  return (
    <TouchableOpacity className="bg-white mr-3 shadow " onPress={()=>{navigation.navigate('Details',{
       data
    })}}>
        <Image source={{uri:data?.imgUrl}}
            className="h-36 w-50 rounded-sm"
        />
        <View className="px-3 pb-4">
            <Text style={{width:150}} className="font-bold text-lg pt-2">{data?.title}</Text>
            <View className="flex-row items-center space-x-1">
                <StarIcon color="green" opacity={0.5} size={22} />
               <Text className="text-xs text-gray-500 font-normal ">
               <Text className="text-green-500">{data?.rating} </Text> <Text>{data?.genre}</Text>
               </Text>
            </View>
            <View className="flex-row items-center space-x-1">
                <MapPinIcon color="gray" opacity={0.4} size={22} />
                <Text className="text-xs text-gray-500">Nearby . {data?.address}</Text>
            </View>
        </View>
    </TouchableOpacity>
  )
}

export default RestaurantCard