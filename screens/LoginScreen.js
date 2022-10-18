import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import React, { useLayoutEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AtSymbolIcon } from 'react-native-heroicons/outline';
const LoginScreen = () => {
    const navigation = useNavigation();
    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, []);

    return (
        <SafeAreaView className="flex-1 bg-white ">
            <View className="px-3 flex-1 justify-around">
                <View className="items-center ">
                    <Image
                        className="scale-145"
                        style={{ width: 270, height: 100 }}
                        source={{
                            uri: 'https://brademar.com/wp-content/uploads/2022/05/Dominos-Pizza-Logo-PNG-2012-%E2%80%93-Now-2.png',
                        }}
                    />
                </View>

                <View>
                    <View className="mx-6">
                        <Text className="text-gray-500 pb-2">Username</Text>
                        <TextInput className=" mb-2 p-4 border font-medium border-gray-300" placeholder="Enter your username" />
                    </View>

                    <View className="mx-6">
                        <Text className="text-gray-500 pb-2 ">Password</Text>
                        <TextInput
                            className="mb-2 p-4 border border-gray-300 font-medium"
                            keyboardType="password"
                            placeholder="Enter your password"
                            secureTextEntry={true}
                        />
                    </View>

                    <TouchableOpacity onPress={()=>{}} className="mx-6 mt-3 flex">
                        <Text className="text-xl text-center  bg-sky-800 text-white pt-4 pb-4">Login</Text>
                    </TouchableOpacity>
                    <Text className="text-center mt-3 text-gray-500 font-medium">Forgot password?</Text>
                </View>

                <SafeAreaView>
                    <TouchableOpacity onPress={()=>{navigation.navigate('Register')}}>
                            <Text className="text-center font-bold text-sky-800 text-xl">Create Account</Text>
                    </TouchableOpacity >
                </SafeAreaView>
            </View>
        </SafeAreaView>
    );
};

export default LoginScreen;
