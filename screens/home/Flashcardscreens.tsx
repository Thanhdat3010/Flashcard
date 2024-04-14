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
const Flashcardscreens = ({navigation,route}:any) => {
  const item = route.params;
  const PlaySound =(flashcard:any) => {
    var Phatam = new Sound(item.mp3, Sound.MAIN_BUNDLE,  (error) => {
      if (error) {
        console.log('failed to load the sound', error);
        return;
      }
      console.log('duration in seconds: ' + Phatam.getDuration() + 'number of channels: ' + Phatam.getNumberOfChannels());
      
      Phatam.play((success) => {
        if (success) {
          console.log('successfully finished playing');
        } else {
          console.log('playback failed due to audio decoding errors');
        }
        
      });
    });
  }
    

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
                        <Image source={item.image2} style={{width:screenWidth,height:630,marginTop:30}}></Image>
                        <Image source={item.image3} style={{width:screenWidth,height:630,marginTop:30}}></Image>
                        <Image source={item.image4} style={{width:screenWidth,height:630,marginTop:30}}></Image>
                        <Image source={item.image5} style={{width:screenWidth,height:630,marginTop:30}}></Image>
                        <Image source={item.image6} style={{width:screenWidth,height:630,marginTop:30}}></Image>

                      </ScrollView>
                      <TouchableOpacity style={{alignContent:'center',alignItems:'center'}} onPress={PlaySound}>
                        <Image style={{width:45,height:45}} source={require('./src/hinhflashcard/button.png')} ></Image>
                      </TouchableOpacity>            
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
export default Flashcardscreens;