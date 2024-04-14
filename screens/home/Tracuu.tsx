import * as React from 'react';
import { SafeAreaView,
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
    Button, } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import COLORS from './src/color';
import Sound from "react-native-sound";
import { FontFamily, Color, FontSize, Border } from "./GlobalStyles";
import Flashcardlist from "./Flashcardlist";
const {width : screenWidth} = Dimensions.get('window')
import { ArrowLeftIcon, Bars3BottomRightIcon, Bars3CenterLeftIcon, Bars3Icon, MagnifyingGlassIcon } from 'react-native-heroicons/outline';
import Tracuulist from './Tracuulist';

const Tracuu = ({navigation}:any) => {
  const PlaySound =(flashcard:any) => {
    var Phatam = new Sound(flashcard.mp3, Sound.MAIN_BUNDLE,  (error) => {
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
    const Card = ({flashcard,props}:any) => {
        return(
            <View style={style.card}>
                <Text style={style.Chu}>
                {flashcard.Tracuuten}                
                </Text>
                <TouchableOpacity activeOpacity={0.7} onPress={() => navigation.navigate('Flashcardscreens',flashcard) }>
        <View style={{marginTop:30,elevation:12,backgroundColor:'#1089ff',borderRadius:9,padding:6,width:120,marginLeft:250}}>
         <Text style={{color:COLORS.white,textAlign:'center'}}> XEM CHI TIẾT </Text>
         
        </View>
        </TouchableOpacity>
            </View>

        )
    }
return(
  <SafeAreaView style={{flex:1, backgroundColor:COLORS.white}}>
        <StatusBar translucent={false} backgroundColor={COLORS.primary}/>
            <View style={style.header}/>
            <View style={{backgroundColor:COLORS.primary,height:120,paddingHorizontal:20}}>
                    <View style={{flex: 1}}>
                    <TouchableOpacity activeOpacity={0.7} onPress={() => navigation.goBack()}>
                      <ArrowLeftIcon size="30" color="white" strokeWidth={2} />
                      </TouchableOpacity>
                    <Text style={style.headerTitle}>Chemistry Flashcards</Text>        
                    </View>
                </View>
            
                <ScrollView>
                  <FlatList
                  scrollEnabled={false}
                  showsVerticalScrollIndicator = {false}
                  numColumns={1}
                  data={Tracuulist}
                  renderItem={({item}) => <Card flashcard={item} />}
                  keyExtractor={eachflashcard => eachflashcard.Tracuuten}
                  >
                  </FlatList>
                  </ScrollView>
  </SafeAreaView>
    )
};
const style = StyleSheet.create({
    header: {
      paddingVertical: 20,
      paddingHorizontal: 20,
      flexDirection: 'row',
      justifyContent: 'space-between',
      backgroundColor: COLORS.primary,
    },
    headerTitle: {
      color: COLORS.white,
      fontWeight: 'bold',
      fontSize: 23,
      marginTop:"2%"
    },
    inputContainer: {
      height: 60,
      width: '100%',
      backgroundColor: COLORS.white,
      borderRadius: 10,
      position: 'absolute',
      top: 90,
      flexDirection: 'row',
      paddingHorizontal: 20,
      alignItems: 'center',
      elevation:12,  
    },
    card: {
        height: 100,
        width: screenWidth,
        marginHorizontal:10,
        elevation: 13,
        marginTop:50,
        borderRadius: 15,
        backgroundColor: COLORS.white,
      },
      Chu: {
        height: 30,
        color: Color.gray,
        fontSize: FontSize.size_xl,
        marginTop:30,
        left: 21,
        textAlign: "left",
        fontFamily: FontFamily.interSemiBold,
        fontWeight: "600",
        position: "absolute",
    },
    sectionTitle: {
        
      marginHorizontal: 20,
      marginVertical: 50,
      fontWeight: 'bold',
      fontSize: 20,
      
    },
    
  });
export default Tracuu;
