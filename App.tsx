/* eslint-disable semi */
/* eslint-disable no-trailing-spaces */
/* eslint-disable jsx-quotes */
/* eslint-disable react/self-closing-comp */
/* eslint-disable keyword-spacing */
/* eslint-disable prettier/prettier */

import React from 'react';
import HomeScreen from './screens/home/HomeScreen';
import Trangchu from './screens/home/Trangchu';
import Thongtinlienhe from './screens/home/Thongtinlienhe';
import Flashcardscreens from './screens/home/Flashcardscreens';
import Tracuu from './screens/home/Tracuu';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Tracuuscreens from './screens/home/Tracuuscreens';
import Quiz from './screens/home/Quiz';
import StartScreen from './screens/home/StartScreen';
import NewTrangchu from './screens/home/NewTrangchu';
import QuangScreen from './screens/home/QuangScreen';
const Stack = createNativeStackNavigator();
const App = ()=>{
  return(
    <NavigationContainer>
        <Stack.Navigator initialRouteName="StartScreen" >
        <Stack.Screen name='Trangchu' component={Trangchu} options={{headerShown:false}}></Stack.Screen>           
        <Stack.Screen name='NewTrangchu' component={NewTrangchu} options={{headerShown:false}}></Stack.Screen>           
        <Stack.Screen name='QuangScreen' component={QuangScreen} options={{headerShown:false}}></Stack.Screen>           

        <Stack.Screen name='StartScreen' component={StartScreen} options={{headerShown:false}}></Stack.Screen>           
          <Stack.Screen name='HomeScreen' component={HomeScreen} options={{headerShown:false}}></Stack.Screen>
          <Stack.Screen name='Flashcardscreens'  component={Flashcardscreens} options={{headerShown:false}}></Stack.Screen>
          <Stack.Screen name='Tracuuscreens'  component={Tracuuscreens} options={{headerShown:false}}></Stack.Screen>
          <Stack.Screen name='Tracuu' component={Tracuu} options={{headerShown:false}}></Stack.Screen>
          <Stack.Screen name='Thongtinlienhe' component={Thongtinlienhe} options={{headerShown:false}}></Stack.Screen>
          <Stack.Screen name='Quiz' component={Quiz} options={{headerShown:false}}></Stack.Screen>
        </Stack.Navigator>
    </NavigationContainer>
  )
}
export default App;


