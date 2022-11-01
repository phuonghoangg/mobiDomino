import { View, Text, FlatList } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Product from '../components/product/Product'

const data = ["1","1","1","1"];
const MenuScreen = () => {
  return (
    <SafeAreaView>
      <FlatList data={data}
                numColumns={2}
                keyExtractor={(item,index)=>index.toString()}
                renderItem={({item})=>(<Product product={item}/>)}></FlatList>
    </SafeAreaView>
  )
}

export default MenuScreen