/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
/* eslint-disable eol-last */
/* eslint-disable prettier/prettier */
/* eslint-disable quotes */
/* eslint-disable prettier/prettier */
import React from 'react';
import { Text, StyleSheet, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import { Color, FontFamily, FontSize, Border } from './GlobalStyles';

const NewTrangchu = ({navigation}:any) => {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.header}>
          <Image
            style={styles.logoIcon}
            resizeMode="cover"
            source={require('../assets/LogoApp.png')}
          />
          <Image
            style={styles.notificationIcon}
            resizeMode="cover"
            source={require('../assets/Frame-1.png')}
          />
        </View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.horizontalScrollView}
          contentContainerStyle={styles.horizontalScrollViewContent}
        >
        <TouchableOpacity onPress={() => navigation.navigate('QuangScreen')} activeOpacity={0.7}>
          <View style={styles.exploreSection}>
            <Text style={styles.newText}>New</Text>
            <Text style={styles.exploreText}>Khám phá quặng</Text>
          </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')} activeOpacity={0.7}>
          <View style={styles.exploreSection}>
            <Text style={styles.newText}>New</Text>
            <Text style={styles.exploreText}>Flashcard Hóa học</Text>
          </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Tracuu')}>
          <View style={styles.exploreSection}>
            <Text style={styles.newText}>New</Text>
            <Text style={styles.exploreText}>Tra cứu</Text>
          </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Quiz')}>
          <View style={styles.exploreSection}>
            <Text style={styles.newText}>New</Text>
            <Text style={styles.exploreText}>Trò chơi</Text>
          </View>
          </TouchableOpacity>
        </ScrollView>
        <View style={styles.websiteOnline}>
          <Text style={styles.sectionTitle}>Website Online</Text>
          <View style={styles.qrContainer}>
            <Image
              style={styles.qrImage}
              resizeMode="cover"
              source={require('../assets/QR.png')}
            />
          <Text style={styles.supportText}>
            Công cụ hỗ trợ trên nền tảng website online
          </Text>
          </View>

        </View>
        <View style={styles.contactSection}>
          <Text style={styles.sectionTitle}>Liên hệ</Text>
          <Text style={styles.emailText}>fivecreatorsgroup@gmail.com</Text>
          <Text style={styles.phoneText}>
            0905935377 | 0799747780 | 0859005874
            {'\n'}0921179630 | 0947341032
          </Text>
        </View>
      </ScrollView>
    );
  };

  const styles = StyleSheet.create({
    container: {
      flexGrow: 1,
      backgroundColor: Color.colorMidnightblue_100,
      alignItems: 'center',
    },
    header: {
      flexDirection: 'row',
      width: '100%',
      justifyContent: 'space-between',
      padding: 20,
      backgroundColor: "#2C2E85",
      alignItems: 'center',
    },
    logoIcon: {
      width: 45,
      height: 51,
    },
    notificationIcon: {
      width: 30,
      height: 30,
    },
    horizontalScrollView: {
        marginTop:30,
      marginBottom: 20,
    },
    horizontalScrollViewContent: {
      paddingHorizontal: 10,
    },
    exploreSection: {
      width: 200,
      height: 220,
      borderColor: Color.colorOrangered,
      borderWidth: 2,
      borderRadius: Border.br_xl,
      padding: 20,
      marginRight: 10,
      alignItems: 'flex-start',
      justifyContent: 'center',
      backgroundColor: Color.colorMidnightblue_100,
    },
    newText: {
      fontSize: 24,
      fontWeight: '500',
      color: Color.colorWhite,
      marginBottom: 10,
    },
    exploreText: {
      fontSize: 30,
      fontWeight: '800',
      color: Color.colorWhite,
    },
    websiteOnline: {
      width: '90%',
      alignItems: 'center',
      marginBottom: 20,
    },
    sectionTitle: {
      fontSize: FontSize.size_xl,
      fontWeight: '700',
      color: Color.colorWhite,
      marginBottom: 10,
    },
    qrContainer: {
      width: 224,
      height: 258,
      borderRadius: Border.br_xl,
      backgroundColor: Color.colorWhite,
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 10,
    },
    qrImage: {
      width: 150,
      height: 150,
    },
    supportText: {
      fontSize: 15,
      color: Color.colorOrangered,
      fontWeight: '700',
      textAlign: 'center',
      marginTop: 10,
    },
    contactSection: {
      width: '90%',
      alignItems: 'center',
      borderColor: '#7990f9',
      borderWidth: 1,
      borderRadius: 10,
      padding: 20,
    },
    emailText: {
      fontSize: 12,
      fontWeight: '500',
      color: Color.colorWhite,
      marginBottom: 10,
    },
    phoneText: {
      fontSize: 12,
      fontWeight: '500',
      color: Color.colorWhite,
      textAlign: 'center',
    },
  });

  export default NewTrangchu;