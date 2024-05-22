import React from "react";
import { Text, StyleSheet, View, Image, TouchableOpacity, ScrollView, SafeAreaView, Dimensions } from "react-native";
import { FontFamily, Color, FontSize, Border } from "./GlobalStyles";

const { width, height } = Dimensions.get('window');
const scale = width / 375;  // Giả sử rằng thiết kế gốc được làm cho màn hình rộng 375

const Trangchu = ({ navigation }:any) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <Text style={styles.giiThiu}>GIỚI THIỆU</Text>
        <Text style={styles.choMngN}>CHÀO MỪNG ĐẾN VỚI APP FLASHCARD HÓA HỌC</Text>
        <Text style={styles.tnhNng}>TÍNH NĂNG</Text>

        {/* Tính năng Thẻ nguyên tố */}
        <FeatureBox
          title="Thẻ nguyên tố"
          description="Cung cấp chi tiết cho bạn về thông tin của từng nguyên tố."
          onPress={() => navigation.navigate('HomeScreen')}
          icon={require("../assets/flaskvialsolid-1.png")}
        />

        {/* Tính năng Tra cứu */}
        <FeatureBox
          title="Tra cứu"
          description="Cung cấp thêm thông tin về bộ môn hóa học"
          onPress={() => navigation.navigate('Tracuu')}
          icon={require("../assets/laptopcodesolid-1.png")}
        />

        {/* Tính năng Trò chơi */}
        <FeatureBox
          title="Trò chơi"
          description="Trò chơi có các câu hỏi liên quan đến flashcard hóa học."
          onPress={() => navigation.navigate('Quiz')}
          icon={require("../assets/gamepadsolid-1.png")}
        />

        {/* Tính năng Thông tin liên hệ */}
        <FeatureBox
          title="Thông tin liên hệ"
          description="Mọi thắc mắc hay góp ý xin liên hệ với đội ngũ của chúng tôi."
          onPress={() => navigation.navigate("Thongtinlienhe")}
          icon={require("../assets/phone-fill.png")}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const FeatureBox = ({ title, description, onPress, icon }:any) => (
  <View style={styles.featureContainer}>
    <Image source={icon} style={styles.icon} resizeMode="cover" />
    <View style={{ flex: 1 }}>
      <Text style={styles.featureTitle}>{title}</Text>
      <Text style={styles.featureDescription}>{description}</Text>
      <TouchableOpacity style={styles.detailButton} onPress={onPress}>
        <Text style={styles.detailButtonText}>Xem chi tiết</Text>
      </TouchableOpacity>
    </View>
  </View>
);

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  scrollView: {
    alignItems: 'center',
    padding: 20 * scale,
  },
  gioithieu: {
    alignItems: 'center',
    padding: 10 * scale,
  },
  giiThiu: {
    fontSize: 24 * scale,
    fontFamily: FontFamily.interExtraBold,
    color: Color.dodgerblue,
    marginVertical: 10 * scale,
    textAlign: 'center',
  },
  choMngN: {
    fontSize: 20 * scale,
    fontFamily: FontFamily.interSemiBold,
    color: Color.dodgerblue,
    marginVertical: 5 * scale,
    alignItems: "center",
    textAlign:'center',
  },
  tnhNng: {
    fontSize: 18 * scale,
    fontFamily: FontFamily.interSemiBold,
    color: Color.dodgerblue,
    marginBottom: 15 * scale,
  },
  featureContainer: {
    flexDirection: 'row',
    backgroundColor: Color.white,
    borderRadius: Border.br_xs,
    padding: 10 * scale,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 4,
    shadowOpacity: 1,
    elevation: 4,
    marginBottom: 20 * scale,
    width: width - 40 * scale, // Trừ lề
    alignItems: 'center',
  },
  icon: {
    width: 37.5 * scale,
    height: 37.5 * scale,
    marginRight: 10 * scale,
  },
  featureTitle: {
    fontSize: 16 * scale,
    fontFamily: FontFamily.interBold,
    color: Color.gray,
  },
  featureDescription: {
    fontSize: 14 * scale,
    fontFamily: FontFamily.interMedium,
    color: Color.black,
    marginBottom: 10 * scale,
  },
  detailButton: {
    backgroundColor: Color.dodgerblue,
    paddingVertical: 5 * scale,
    paddingHorizontal: 10 * scale,
    borderRadius: Border.br_3xs,
  },
  detailButtonText: {
    fontSize: 14 * scale,
    color: Color.white,
    fontFamily: FontFamily.interBold,
    textAlign: 'center',
  }
});

export default Trangchu;