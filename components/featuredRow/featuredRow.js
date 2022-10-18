import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { ArrowRightIcon } from 'react-native-heroicons/outline'
import RestaurantCard from './RestaurantCard'

const FeaturedRow = ({id,title,description,featureCategory}) => {
  return (
    <View>
      <View className="flex-row mt-4 items-center justify-between px-4">
        <Text className="font-bold text-lg">{title}</Text>
        <ArrowRightIcon color="#00CCBB"/>
      </View>
      <Text className="text-xs text-gray-500 px-4 font-normal">{description}</Text>
      <ScrollView 
        horizontal
        contentContainerStyle={{
            paddingHorizontal:15,
        }}
        showsHorizontalScrollIndicator={false}
        className="pt-4"
      >
        {/* restaurent */}
        <RestaurantCard
        id={123}
        imgUrl="https://img.dominos.vn/Okonomiyaki-banh-xeo-nhat.jpg"
        title="Yo! sushi"
        rating={4.5}
        genre="Japanes"
        address="123 Main st"
        short_description="this iz short description"
        dishes={[]}
        long={20}
        lat={0}
        />
         <RestaurantCard
        id={123}
        imgUrl="https://media-cdn.tripadvisor.com/media/photo-s/19/3b/00/06/sushi-place.jpg"
        title="Yo! sushi"
        rating={4.5}
        genre="Japanes"
        address="123 Main st"
        short_description="this iz short description"
        dishes={[]}
        long={20}
        lat={0}
        />
         <RestaurantCard
        id={123}
        imgUrl="https://media-cdn.tripadvisor.com/media/photo-s/19/3b/00/06/sushi-place.jpg"
        title="Yo! sushi"
        rating={4.5}
        genre="Japanes"
        address="123 Main st"
        short_description="this iz short description"
        dishes={[]}
        long={20}
        lat={0}
        />
      </ScrollView>
    </View>
  )
}

export default FeaturedRow