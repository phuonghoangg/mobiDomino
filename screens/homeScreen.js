import { View, Text, Image, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import React, { useLayoutEffect } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Categories from '../components/category/categories';
import FeaturedRow from '../components/featuredRow/featuredRow';
import Slider from '../components/slider/Slider';
const HomeScreen = () => {
    const route = useRoute();
    const { numberTable } = route.params


    const navigation = useNavigation();
    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, []);
    return (
        <SafeAreaView className="bg-white pt-4">
            {/*header */}
            <View className="flex-row pb-3 items-center  justify-between mx-4">
                <Image style={{ width: 200, height: 50 }} source={{ uri: 'https://brademar.com/wp-content/uploads/2022/05/Dominos-Pizza-Logo-PNG-2012-%E2%80%93-Now-2.png' }} />
                <Text> Phuong Hoang</Text>
                {/* <View className="flex-row items-center">
                    <Text className="font-bold text-xl ">Pizza Domilo!</Text>
                </View> */}
            </View>

            {/* Body */}
            <ScrollView className="bg-gray-100" contentContainerStyle={{ paddingBottom: 100 }}>
                {/* Component */}
                <Slider />
                <Categories />

                {/* Featured Row */}
                <FeaturedRow
                    id="123"
                    title="Thực đơn"
                    description="các món ăn có trong nhà hàng"
                    featureCategory="featured"
                />
                {/* Tasty Disount */}
                {/* 
                <FeaturedRow
                    id="1234"
                    title="Featured"
                    description="Paid placements from our partners"
                    featureCategory="featured"
                /> */}
                {/* Offers near you */}
                {/* <FeaturedRow
                    id="12345"
                    title="Featured"
                    description="Paid placements from our partners"
                    featureCategory="featured"
                /> */}
                <View className="flex-row mt-4 items-center justify-between px-4 ">
                    <Text className="font-bold text-xl ">Liên hệ với Dominoo's</Text>
                </View>
                <TouchableOpacity onPress={() => { navigation.navigate('Cart') }} className=" flex-row mt-4 items-center justify-between mx-4 bg-white p-3"  >
                    <Text className="text-green-600">Cần sự hỗ trợ ? </Text>
                    <Text className="font-bold text-green-600">1900 1822</Text>
                </TouchableOpacity>
                <TouchableOpacity className=" flex-row mt-4 items-center justify-between mx-4 bg-white p-3"  >
                    <Text className="text-green-600">Điều khoản & điều kiện </Text>

                </TouchableOpacity>
                <Image source={{ uri: 'https://dominos.vn/img/credentials.png' }} />
            </ScrollView>
            {/* Footer */}

        </SafeAreaView>
    );
};

export default HomeScreen;
