/* eslint-disable prettier/prettier */
/* eslint-disable eol-last */
/* eslint-disable comma-dangle */
/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable semi */
/* eslint-disable no-trailing-spaces */
/* eslint-disable keyword-spacing */
/* eslint-disable quotes */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
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
import Sound from "react-native-sound";
import Flashcardlist from "./Flashcardlist";
import HomeScreen from "./HomeScreen";
import { ArrowLeftIcon, Bars3BottomRightIcon, Bars3CenterLeftIcon, Bars3Icon, MagnifyingGlassIcon } from 'react-native-heroicons/outline';
const QuangScreen = ({navigation}:any) => {
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
                        <Image source={require("./src/tracuu/Hematite.png")} style={{width:screenWidth,height:630,marginTop:30}}></Image>
                        <Image source={require("./src/tracuu/Hematite2.png")} style={{width:screenWidth,height:630,marginTop:30}}></Image>
                        <Image source={require("./src/tracuu/Magnetite.png")} style={{width:screenWidth,height:630,marginTop:30}}></Image>
                        <Image source={require("./src/tracuu/Magnetite2.png")} style={{width:screenWidth,height:630,marginTop:30}}></Image>
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
export default QuangScreen;