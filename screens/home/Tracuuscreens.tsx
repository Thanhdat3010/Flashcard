import React, { useState } from "react";
import{
    SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  View,
  Text,
  TextInput,
  Image,
  FlatList,
  Dimensions,
  TouchableOpacity,
  ImageBackground,
  ListRenderItem,
  Button,
  




} from 'react-native'
const {width : screenWidth} = Dimensions.get('window')
import COLORS from "./src/color";
import { ArrowLeftIcon, Bars3BottomRightIcon, Bars3CenterLeftIcon, Bars3Icon, MagnifyingGlassIcon } from 'react-native-heroicons/outline';
const Tracuuscreens = ({navigation,route}:any) => {
  const item = route.params;
    return(
        <SafeAreaView style={{backgroundColor:COLORS.white,flex:1}}>
            <View style ={{flex:1}}>
                      <View style={{marginTop:20,marginLeft:5}}>
                      <TouchableOpacity activeOpacity={0.7} onPress={() => navigation.goBack()}>
                      <ArrowLeftIcon size="30" color={COLORS.dark} strokeWidth={2} />
                      </TouchableOpacity>
                      </View>
                      <ScrollView
                      showsHorizontalScrollIndicator={false}
                      pagingEnabled
                      horizontal                      
                      >
                        <Image source={item.image1} style={{width:screenWidth,height:630,marginTop:30}}></Image>

                      </ScrollView>
                      
                      </View>
                      
                      
                      
        </SafeAreaView>
    )
};
const style = StyleSheet.create({
   header: {
    paddingVertical:20,
    flexDirection:'row',
    alignItems:'center',
    margin:20,
   }

})
export default Tracuuscreens;