import { View, Text, FlatList, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Product from '../components/product/Product'
import { ScrollView } from 'react-native';
import MenuCategory from '../components/menuCategory/MenuCategory';

const data = ["1", "1", "1", "1"];
const MenuScreen = () => {
  return (
    <SafeAreaView>
      {/* header */}
      <View className="justify-center items-center">
        <Image style={{ width: 200, height: 45 }} source={{ uri: 'https://brademar.com/wp-content/uploads/2022/05/Dominos-Pizza-Logo-PNG-2012-%E2%80%93-Now-2.png' }} />
        <MenuCategory />


      </View>
      <ScrollView>
      </ScrollView>

      {/* thay doi */}

      {/* <FlatList data={data}
                numColumns={2}
                keyExtractor={(item,index)=>index.toString()}
                renderItem={({item})=>(<Product product={item}/>)}></FlatList> */}
    </SafeAreaView>
  )
}

export default MenuScreen