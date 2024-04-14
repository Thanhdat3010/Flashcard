import React from "react";
import { StyleSheet, View, Text, Image,TouchableOpacity } from "react-native";
import { Color, FontFamily } from "../home/GlobalStyles";

const Plashscreen = ({navigation}:any) => {
  return (
    <View style={styles.plashscreen}>
      <Image
        style={styles.logoApp2}
        resizeMode="cover"
        source={require("../assets/logo-app--2.png")}
      />
      <Text style={[styles.flashcardHaHc, styles.ngDngVFlexBox]}>
        Flashcard Hóa Học
      </Text>
      <TouchableOpacity activeOpacity={0.7} onPress={() => navigation.navigate('Trangchu') }>
      <View style={styles.khmPhNgayParent}>
        <Text style={styles.khmPhNgay}>Khám Phá Ngay</Text>
        <Image
          style={styles.frameChild}
          resizeMode="cover"
          source={require("../assets/line-2.png")}
        />
      </View>
      </TouchableOpacity>
      <Text style={[styles.ngDngV, styles.ngDngVFlexBox]}>
        Ứng dụng về môn Hóa Học giúp bạn rèn luyện và giải trí. Nơi bạn có thể
        thỏa sức tìm hiểu về hóa học và trải nghiệm các tiện ích của chúng tôi
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  ngDngVFlexBox: {
    textAlign: "center",
    position: "absolute",
  },
  logoApp2: {
    top: 141,
    left: 105,
    width: 200,
    height: 200,
    position: "absolute",
  },
  flashcardHaHc: {
    top: 462,
    left: 42,
    fontSize: 34,
    fontWeight: "800",
    fontFamily: FontFamily.interExtraBold,
    color: Color.dodgerblue,
    width: 327,
    height: 60,
  },
  khmPhNgay: {
    top: 15,
    left: 22,
    fontSize: 25,
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    color: Color.white,
    textAlign: "center",
    width: 197,
    height: 30,
    position: "absolute",
  },
  frameChild: {
    top: 20,
    left: 226,
    width: 35,
    height: 22,
    position: "absolute",
  },
  khmPhNgayParent: {
    top: 631,
    left: 69,
    borderRadius: 10,
    backgroundColor: Color.dodgerblue,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    width: 273,
    height: 61,
    position: "absolute",
  },
  ngDngV: {
    top: 519,
    left: 55,
    fontSize: 15,
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
    color: "#000",
    width: 300,
    height: 100,
  },
  plashscreen: {
    backgroundColor: Color.white,
    flex: 1,
    width: "100%",
    height: '100%',
    overflow: "hidden",
  },
});

export default Plashscreen;
