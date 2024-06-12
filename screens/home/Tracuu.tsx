/* eslint-disable eol-last */
/* eslint-disable comma-dangle */
/* eslint-disable no-trailing-spaces */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable quotes */
/* eslint-disable prettier/prettier */
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Dimensions,
} from 'react-native';
import { ArrowLeftIcon } from 'react-native-heroicons/outline';
import COLORS from './src/color';
import { FontFamily, Color, FontSize } from "./GlobalStyles";
import Tracuulist from './Tracuulist';

const { width } = Dimensions.get('window');

const Tracuu = ({ navigation }:any) => {
  const Card = ({ flashcard }:any) => (
    <View style={styles.card}>
      <Text style={styles.text}>
        {flashcard.Tracuuten}                
      </Text>
      <TouchableOpacity 
        activeOpacity={0.7} 
        onPress={() => navigation.navigate('Tracuuscreens', flashcard)}
        style={styles.detailButton}>
        <Text style={styles.buttonText}>XEM CHI TIẾT</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar translucent={false} backgroundColor={COLORS.primary} />
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <ArrowLeftIcon size={30} color="white" strokeWidth={2} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Chemistry Flashcards</Text>
      </View>
      
      <ScrollView>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={Tracuulist}
          renderItem={({ item }) => <Card flashcard={item} />}
          keyExtractor={item => item.Tracuuten}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  header: {
    backgroundColor: COLORS.primary,
    paddingVertical: 20,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerTitle: {
    color: COLORS.white,
    fontWeight: 'bold',
    fontSize: 23,
    marginLeft: 10,
  },
  card: {
    height: 100,
    width: width - 5,  // Khoảng cách hai bên mỗi bên 10
    marginVertical: 10,
    elevation: 13,
    borderRadius: 15,
    backgroundColor: COLORS.white,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  text: {
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.interSemiBold,
    color: Color.gray,
  },
  detailButton: {
    backgroundColor: '#1089ff',
    borderRadius: 9,
    padding: 6,
  },
  buttonText: {
    color: COLORS.white,
    textAlign: 'center',
  }
});

export default Tracuu;