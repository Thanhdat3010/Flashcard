import React from "react";
import { Text, StyleSheet, View, Image,TouchableOpacity,ScrollView,SafeAreaView} from "react-native";
import { FontFamily, Color, FontSize, Border } from "./GlobalStyles";
import { Icon } from "react-native-vector-icons/Icon";
import HomeScreen from "./HomeScreen";
const Trangchu = ({navigation}:any) => {
  return (
    <SafeAreaView>
    <ScrollView>
    <View style={styles.gioithieu}>
      <Text style={styles.giiThiu}>Giới thiệu</Text>
      <Text style={[styles.choMngN, styles.tnhNngTypo]}>{`Chào mừng đến với 
Flashcard hóa học`}</Text>
      <Text style={[styles.tnhNng, styles.tnhNngTypo]}>Tính Năng</Text>
      <View style={[styles.rectangleParent, styles.groupParentLayout]}>
        <View style={styles.groupChildShadowBox} />
        <Text style={[styles.thNguynT, styles.thNguynTTypo]}>
          Thẻ nguyên tố
        </Text>
        <Text style={[styles.cungCpChi, styles.chiTypo]}>
          Cung cấp chi tiết cho bạn về thông tin của từng nguyên tố, hình ảnh
          minh họa các ứng dụng thực tiễn và audio của nguyên tố đó.
        </Text>
        <TouchableOpacity activeOpacity={0.7} onPress={() => navigation.navigate('HomeScreen') }>
        <View style={[styles.rectangleGroup, styles.groupLayout]}>
          <View style={[styles.groupItem, styles.groupLayout]} />
          <Text style={[styles.xemChiTit, styles.chiTypo]}>Xem chi tiết</Text>
        </View>
        </TouchableOpacity>
      </View>
      <View style={[styles.rectangleContainer, styles.groupParentLayout]}>
        <View style={styles.groupChildShadowBox} />
        <Text style={[styles.thNguynT, styles.thNguynTTypo]}>Tra cứu</Text>
        <Text style={[styles.cungCpChi, styles.chiTypo]}>
          Cung cấp thêm thông tin về bộ môn hóa học
        </Text>
        <TouchableOpacity activeOpacity={0.7} onPress={() => navigation.navigate('Tracuu')}>
        <View style={[styles.rectangleGroup, styles.groupLayout]}>
          <View style={[styles.groupItem, styles.groupLayout]} />
          <Text style={[styles.xemChiTit, styles.chiTypo]}>Xem chi tiết</Text>
        </View>
        </TouchableOpacity>
      </View>
      <Image
        style={[styles.flaskVialSolid1Icon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/flaskvialsolid-1.png")}
      />
      <Image
        style={[styles.laptopCodeSolid1Icon, styles.solid1IconLayout]}
        resizeMode="cover"
        source={require("../assets/laptopcodesolid-1.png")}
      />
      <View style={[styles.groupParent, styles.groupParentLayout]}>
        
        <View style={[styles.rectangleParent1, styles.groupItemPosition]}>
          <View style={styles.groupChildShadowBox} />
          <Text style={[styles.thNguynT, styles.thNguynTTypo]}>Trò chơi</Text>
          <Text style={[styles.cungCpChi, styles.chiTypo]}>
            Trò chơi có các câu hỏi liên quan đến flashcard hóa học giúp cho
            người học cải thiện khả năng tư duy và ghi nhớ.
          </Text>
          <TouchableOpacity activeOpacity={0.7} onPress={() => navigation.navigate('Quiz') }>
          <View style={[styles.rectangleGroup, styles.groupLayout]}>
            <View style={[styles.groupItem, styles.groupLayout]} />
            <Text style={[styles.xemChiTit, styles.chiTypo]}>Xem chi tiết</Text>
          </View>
          </TouchableOpacity>
        </View>
        <Image
          style={[styles.gamepadSolid1Icon, styles.solid1IconLayout]}
          resizeMode="cover"
          source={require("../assets/gamepadsolid-1.png")}
        />
      </View>
      <View style={[styles.groupContainer, styles.groupParentLayout]}>
        <View style={[styles.rectangleParent1, styles.groupItemPosition]}>
          <View style={styles.groupChildShadowBox} />
          <Text style={[styles.thngTinLin, styles.thNguynTTypo]}>
            Thông tin liên hệ
          </Text>
          <Text style={[styles.cungCpChi, styles.chiTypo]}>
            Mọi thắc mắc hay góp ý xin liên hệ với đội ngũ của chúng tôi.
          </Text>
          <TouchableOpacity activeOpacity={0.7} onPress={() => navigation.navigate("Thongtinlienhe") }>
          <View style={[styles.rectangleGroup, styles.groupLayout]}>
            <View style={[styles.groupItem, styles.groupLayout]} />
            <Text style={[styles.xemChiTit, styles.chiTypo]}>Xem chi tiết</Text>
          </View>
          </TouchableOpacity>
        </View>
        <Image
          style={[styles.phoneFillIcon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/phone-fill.png")}
        />
      </View>
    </View>
    </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  tnhNngTypo: {
    textAlign: "left",
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    left: 30,
    color: Color.dodgerblue,
    position: "absolute",
  },
  groupParentLayout: {
    height: 171,
    width: 368,
    position: "absolute",
  },
  thNguynTTypo: {
    height: 27,
    color: Color.gray,
    fontSize: FontSize.size_xl,
    top: 13,
    left: 21,
    textAlign: "left",
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    position: "absolute",
  },
  chiTypo: {
    fontSize: FontSize.size_mini,
    textAlign: "left",
    position: "absolute",
  },
  groupLayout: {
    width: 103,
    height: 35,
    position: "absolute",
  },
  iconLayout: {
    width: 35,
    position: "absolute",
  },
  solid1IconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  groupItemPosition: {
    left: 0,
    top: 0,
  },
  giiThiu: {
    top: 73,
    left: 117,
    fontSize: FontSize.size_9xl,
    fontWeight: "800",
    fontFamily: FontFamily.interExtraBold,
    textAlign: "center",
    width: 177,
    height: 34,
    color: Color.dodgerblue,
    position: "absolute",
  },
  choMngN: {
    top: 148,
    fontSize: 34,
    width: 339,
    height: 84,
  },
  viNgDng: {
    top: 244,
    left: 31,
    fontSize: 16,
    width: 353,
    height: 116,
    color: Color.black,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    textAlign: "left",
    position: "absolute",
  },
  tnhNng: {
    top: 370,
    fontSize: 24,
    width: 119,
    height: 30,
  },
  groupChildShadowBox: {
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    borderRadius: Border.br_xs,
    left: 0,
    top: 0,
    height: 171,
    width: 368,
    position: "absolute",
    backgroundColor: Color.white,
  },
  thNguynT: {
    width: 151,
  },
  cungCpChi: {
    top: 46,
    width: 338,
    height: 55,
    left: 21,
    fontSize: FontSize.size_mini,
    color: Color.black,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
  },
  groupItem: {
    borderRadius: Border.br_3xs,
    backgroundColor: Color.dodgerblue,
    height: 35,
    left: 0,
    top: 0,
  },
  xemChiTit: {
    top: 8,
    left: 8,
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    color: Color.white,
    width: 90,
    height: 23,
  },
  rectangleGroup: {
    top: 118,
    left: 243,
    height: 35,
  },
  rectangleParent: {
    top: 410,
    left: 22,
    width: 368,
  },
  rectangleContainer: {
    top: 599,
    left: 22,
    width: 368,
  },
  flaskVialSolid1Icon: {
    top: 423,
    left: "85%",
    height: 31,
    overflow: "hidden",
  },
  laptopCodeSolid1Icon: {
    height: "3.06%",
    width: "9.25%",
    top: "51.25%",
    right: "10.46%",
    bottom: "45.69%",
    left: "85%",
  },
  rectangleParent1: {
    height: 171,
    width: 368,
    position: "absolute",
  },
  gamepadSolid1Icon: {
    height: "19.5%",
    width: "9.51%",
    top: "5.21%",
    right: "6.25%",
    bottom: "75.28%",
    left: "85%",
  },
  groupParent: {
    top: 788,
    left: 22,
    width: 368,
  },
  thngTinLin: {
    width: 165,
  },
  phoneFillIcon: {
    top: 7,
    left: '85%',
    height: 35,
  },
  groupContainer: {
    top: 977,
    left: 22,
    width: 368,
  },
  gioithieu: {
    flex: 1,
    width: "100%",
    height: 1184,
    overflow: "hidden",
    backgroundColor: Color.white,
  },
});

export default Trangchu;
