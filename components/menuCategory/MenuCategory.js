import { View, Text, ScrollView } from 'react-native'
import React from 'react'

const MenuCategory = () => {
    return (
        <ScrollView
        className="px-4"
            contentContainerStyle={{
                paddingHorizontal: 15,
                paddingTop: 10
            }}
            horizontal
            showsHorizontalScrollIndicator={false}
        >
            <View>
                <Text>asdsa</Text>
            </View>
            <View>
                <Text>asdsa</Text>
            </View>
            <View>
                <Text>asdsa</Text>
            </View>
            <View>
                <Text>asdsa</Text>
            </View>
            <View>
                <Text>asdsa</Text>
            </View>
        </ScrollView >
    )
}

export default MenuCategory