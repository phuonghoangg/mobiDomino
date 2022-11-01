import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'

const BookTableScreen = () => {
    const navigation = useNavigation()
    return (
        <SafeAreaView className="pt-2 flex-1  ">
            <ScrollView contentContainerStyle={{ paddingBottom: 4 }} >
                <View className="justify-center items-center">
                    <View className="flex-row pt-2">
                        <TouchableOpacity onPress={() => { navigation.navigate('HomeScreen',{
                            numberTable:"1"
                        }) }} className="w-20 h-20 items-center justify-center bg-slate-400 mx-2">
                            <Text className="text-2xl">1</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { navigation.navigate('HomeScreen',{
                            numberTable:"2"
                        }) }} className="w-20 h-20 items-center justify-center bg-slate-400 mx-2">
                            <Text className="text-2xl">2</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { navigation.navigate('HomeScreen',{
                            numberTable:"3"
                        }) }} className="w-20 h-20 items-center justify-center bg-slate-400 mx-2">
                            <Text className="text-2xl">3</Text>
                        </TouchableOpacity>
                    </View>
                    <View className="flex-row pt-2">
                        <TouchableOpacity onPress={() => { navigation.navigate('HomeScreen',{
                            numberTable:"4"
                        }) }} className="w-20 h-20 items-center justify-center bg-slate-400 mx-2">
                            <Text className="text-2xl">4</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { navigation.navigate('HomeScreen',{
                            numberTable:"5"
                        }) }} className="w-20 h-20 items-center justify-center bg-slate-400 mx-2">
                            <Text className="text-2xl">5</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { navigation.navigate('HomeScreen',{
                            numberTable:"6"
                        }) }} className="w-20 h-20 items-center justify-center bg-slate-400 mx-2">
                            <Text className="text-2xl">6</Text>
                        </TouchableOpacity>
                    </View>
                   <View  className="flex-row pt-2">
                        <TouchableOpacity onPress={() => { navigation.navigate('HomeScreen',{
                            numberTable:"7"
                        }) }} className="w-20 h-20 items-center justify-center bg-slate-400 mx-2">
                            <Text className="text-2xl">7</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { navigation.navigate('HomeScreen',{
                            numberTable:"8"
                        }) }} className="w-20 h-20 items-center justify-center bg-slate-400 mx-2">
                            <Text className="text-2xl">8</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { navigation.navigate('HomeScreen',{
                            numberTable:"9"
                        }) }} className="w-20 h-20 items-center justify-center bg-slate-400 mx-2">
                            <Text className="text-2xl">9</Text>
                        </TouchableOpacity>
                   </View>
                   
                   <View  className="flex-row pt-2">
                        <TouchableOpacity onPress={() => { navigation.navigate('HomeScreen',{
                            numberTable:"10"
                        }) }} className="w-20 h-20 items-center justify-center bg-slate-400 mx-2">
                            <Text className="text-2xl">10</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { navigation.navigate('HomeScreen',{
                            numberTable:"11"
                        }) }} className="w-20 h-20 items-center justify-center bg-slate-400 mx-2">
                            <Text className="text-2xl">11</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { navigation.navigate('HomeScreen',{
                            numberTable:"12"
                        }) }} className="w-20 h-20 items-center justify-center bg-slate-400 mx-2">
                            <Text className="text-2xl">12</Text>
                        </TouchableOpacity>
                       
                   </View>
                </View>
            </ScrollView>
        </SafeAreaView >
    )
}

export default BookTableScreen