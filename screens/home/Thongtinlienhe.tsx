import React from "react";
import { Text, StyleSheet, View, Image,SafeAreaView,ScrollView } from "react-native";
import { Color, FontFamily, FontSize } from "../home/GlobalStyles";
import COLORS from "./src/color";

const Thongtinlienhe = () => {
  return (
    <ScrollView>
    <View style={styles.thongtinlienhe}>
      <Text style={styles.thngTinLin}>Thông tin liên hệ</Text>
      <View style={styles.phoneFill} />
      <View style={[styles.rectangleParent, styles.groupParentShadowBox]}>
        <View style={styles.groupChildShadowBox} />
        <View style={[styles.trngThnhTParent, styles.parentLayout2]}>
          <Text style={[styles.trngThnhT, styles.nhnTypo]}>
            Trương Thành Đạt
          </Text>
          <View
            style={[styles.messageAltFillParent, styles.messageParentLayout]}
          >
            <Image
              style={[styles.messageAltFillIcon, styles.messageIconLayout]}
              resizeMode="cover"
              source={require("../assets/message-alt-fill.png")}
            />
            <Image
              style={[styles.socialIcons, styles.socialLayout2]}
              resizeMode="cover"
              source={require("../assets/social-icons.png")}
            />
            <Text style={[styles.text, styles.textTypo]}>0799747780</Text>
            <Text
              style={[styles.tait51498gmailcom, styles.tait51498gmailcomTypo]}
            >{`tait51498@gmail.com
`}</Text>
            <Image
              style={[styles.socialIcons1, styles.socialLayout1]}
              resizeMode="cover"
              source={require("../assets/social-icons1.png")}
            />
            <Image
              style={[styles.socialIcons2, styles.socialLayout]}
              resizeMode="cover"
              source={require("../assets/social-icons2.png")}
            />
            <Image
              style={[styles.socialIcons3, styles.socialLayout1]}
              resizeMode="cover"
              source={require("../assets/social-icons3.png")}
            />
            <Image
              style={[styles.groupItem, styles.groupChildLayout]}
              resizeMode="cover"
              source={require("../assets/vector-189.png")}
            />
            <Image
              style={[styles.socialIcons4, styles.socialIcons4Position]}
              resizeMode="cover"
              source={require("../assets/social-icons4.png")}
            />
          </View>
        </View>
      </View>
      <View style={[styles.rectangleGroup, styles.groupParentShadowBox]}>
        <View style={styles.groupChildShadowBox} />
        <View
          style={[styles.nguynCaoNhnParent, styles.nguynCaoNhnParentLayout]}
        >
          <Text style={[styles.nguynCaoNhn, styles.nhnTypo]}>
            Nguyễn Cao Nhân
          </Text>
          <View
            style={[styles.messageAltFillGroup, styles.nguynCaoNhnParentLayout]}
          >
            <Image
              style={[styles.messageAltFillIcon1, styles.messageIconLayout]}
              resizeMode="cover"
              source={require("../assets/message-alt-fill.png")}
            />
            <Image
              style={[styles.socialIcons5, styles.socialLayout2]}
              resizeMode="cover"
              source={require("../assets/social-icons.png")}
            />
            <Text style={[styles.text1, styles.text1Position]}>0921179630</Text>
            <Text
              style={[
                styles.caonhan27102000gmailcom,
                styles.socialIcons4Position,
              ]}
            >
              caonhan27102000@gmail.com
            </Text>
            <Image
              style={[styles.socialIcons6, styles.socialLayout1]}
              resizeMode="cover"
              source={require("../assets/social-icons1.png")}
            />
            <Image
              style={[styles.socialIcons7, styles.socialLayout]}
              resizeMode="cover"
              source={require("../assets/social-icons2.png")}
            />
            <Image
              style={[styles.socialIcons8, styles.socialLayout1]}
              resizeMode="cover"
              source={require("../assets/social-icons3.png")}
            />
            <Image
              style={[styles.vectorIcon, styles.groupChildLayout]}
              resizeMode="cover"
              source={require("../assets/vector-189.png")}
            />
            <Image
              style={[styles.socialIcons9, styles.socialLayout]}
              resizeMode="cover"
              source={require("../assets/social-icons4.png")}
            />
          </View>
        </View>
      </View>
      <View style={[styles.rectangleContainer, styles.groupParentShadowBox]}>
        <View style={styles.groupChildShadowBox} />
        <View style={[styles.trngThnhTParent, styles.parentLayout2]}>
          <Text style={[styles.trngThnhT, styles.nhnTypo]}>Vũ Mạnh Hiếu</Text>
          <View
            style={[styles.messageAltFillParent, styles.messageParentLayout]}
          >
            <Image
              style={[styles.messageAltFillIcon, styles.messageIconLayout]}
              resizeMode="cover"
              source={require("../assets/message-alt-fill.png")}
            />
            <Image
              style={[styles.socialIcons, styles.socialLayout2]}
              resizeMode="cover"
              source={require("../assets/social-icons.png")}
            />
            <Text style={[styles.text, styles.textTypo]}>0859005874</Text>
            <Text
              style={[styles.tait51498gmailcom, styles.tait51498gmailcomTypo]}
            >
              cktt0987@gmail.com
            </Text>
            <Image
              style={[styles.socialIcons1, styles.socialLayout1]}
              resizeMode="cover"
              source={require("../assets/social-icons1.png")}
            />
            <Image
              style={[styles.socialIcons2, styles.socialLayout]}
              resizeMode="cover"
              source={require("../assets/social-icons2.png")}
            />
            <Image
              style={[styles.socialIcons3, styles.socialLayout1]}
              resizeMode="cover"
              source={require("../assets/social-icons3.png")}
            />
            <Image
              style={[styles.groupItem, styles.groupChildLayout]}
              resizeMode="cover"
              source={require("../assets/vector-189.png")}
            />
            <Image
              style={[styles.socialIcons4, styles.socialIcons4Position]}
              resizeMode="cover"
              source={require("../assets/social-icons4.png")}
            />
          </View>
        </View>
      </View>
      <View style={[styles.groupView, styles.groupParentShadowBox]}>
        <View style={styles.groupChildShadowBox} />
        <View style={[styles.nguynHongNParent, styles.parentLayout1]}>
          <Text style={[styles.nguynHongN, styles.nhnTypo]}>
            Nguyễn Hoàng Ân
          </Text>
          <View style={[styles.messageAltFillParent1, styles.parentLayout1]}>
            <Image
              style={[styles.messageAltFillIcon1, styles.messageIconLayout]}
              resizeMode="cover"
              source={require("../assets/message-alt-fill.png")}
            />
            <Image
              style={[styles.socialIcons15, styles.socialLayout2]}
              resizeMode="cover"
              source={require("../assets/social-icons.png")}
            />
            <Text style={[styles.text3, styles.textTypo]}>0947341032</Text>
            <Text
              style={[
                styles.tinhtutrentroi360gmailcom,
                styles.tait51498gmailcomTypo,
              ]}
            >
              tinhtutrentroi360@gmail.com
            </Text>
            <Image
              style={[styles.socialIcons16, styles.socialLayout1]}
              resizeMode="cover"
              source={require("../assets/social-icons1.png")}
            />
            <Image
              style={[styles.socialIcons17, styles.socialLayout]}
              resizeMode="cover"
              source={require("../assets/social-icons2.png")}
            />
            <Image
              style={[styles.socialIcons18, styles.socialLayout1]}
              resizeMode="cover"
              source={require("../assets/social-icons3.png")}
            />
            <Image
              style={[styles.groupChild3, styles.groupChildLayout]}
              resizeMode="cover"
              source={require("../assets/vector-189.png")}
            />
            <Image
              style={[styles.socialIcons19, styles.socialLayout]}
              resizeMode="cover"
              source={require("../assets/social-icons4.png")}
            />
          </View>
        </View>
      </View>
      <View style={[styles.rectangleParent1, styles.groupParentShadowBox]}>
        <View style={styles.groupChildShadowBox} />
        <View style={[styles.trnDuyNhnParent, styles.parentLayout]}>
          <Text style={[styles.trnDuyNhn, styles.nhnTypo]}>Trần Duy Nhân</Text>
          <View style={[styles.messageAltFillParent2, styles.parentLayout]}>
            <Image
              style={[styles.messageAltFillIcon, styles.messageIconLayout]}
              resizeMode="cover"
              source={require("../assets/message-alt-fill.png")}
            />
            <Image
              style={[styles.socialIcons20, styles.socialLayout2]}
              resizeMode="cover"
              source={require("../assets/social-icons.png")}
            />
            <Text style={[styles.text4, styles.textTypo]}>0905935377</Text>
            <Text style={styles.tranduynhan497gmailcom}>
              tranduynhan497@gmail.com
            </Text>
            <Image
              style={[styles.socialIcons21, styles.text1Position]}
              resizeMode="cover"
              source={require("../assets/social-icons1.png")}
            />
            <Image
              style={[styles.socialIcons22, styles.socialLayout]}
              resizeMode="cover"
              source={require("../assets/social-icons2.png")}
            />
            <Image
              style={[styles.socialIcons23, styles.socialLayout1]}
              resizeMode="cover"
              source={require("../assets/social-icons3.png")}
            />
            <Image
              style={[styles.groupChild5, styles.groupChildLayout]}
              resizeMode="cover"
              source={require("../assets/vector-189.png")}
            />
            <Image
              style={[styles.socialIcons24, styles.socialLayout]}
              resizeMode="cover"
              source={require("../assets/social-icons4.png")}
            />
          </View>
        </View>
      </View>
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  groupParentShadowBox: {
    height: 143,
    width: 250,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    left: 81,
    position: "absolute",
  },
  parentLayout2: {
    height: 92,
    top: 26,
  },
  nhnTypo: {
    height: 22,
    color: COLORS.white,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_lg,
    width: 164,
    top: 0,
    textAlign: "center",
    position: "absolute",
  },
  messageParentLayout: {
    height: 64,
    top: 27,
  },
  messageIconLayout: {
    height: 14,
    width: 15,
    left: 0,
    position: "absolute",
  },
  socialLayout2: {
    height: 19,
    width: 20,
    top: 46,
    position: "absolute",
    overflow: "hidden",
  },
  textTypo: {
    width: 96,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_smi,
    color: Color.white,
    top: 0,
    height: 15,
    textAlign: "center",
  },
  tait51498gmailcomTypo: {
    top: 19,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_smi,
    color: Color.white,
    height: 15,
    textAlign: "center",
  },
  socialLayout1: {
    top: 45,
    height: 19,
    width: 20,
    overflow: "hidden",
  },
  socialLayout: {
    top: 44,
    height: 19,
    width: 20,
    overflow: "hidden",
  },
  groupChildLayout: {
    height: 12,
    width: 13,
    top: 3,
    position: "absolute",
  },
  socialIcons4Position: {
    left: 17,
    position: "absolute",
  },
  nguynCaoNhnParentLayout: {
    width: 209,
    position: "absolute",
  },
  text1Position: {
    left: 60,
    position: "absolute",
  },
  parentLayout1: {
    width: 199,
    position: "absolute",
  },
  parentLayout: {
    width: 196,
    position: "absolute",
  },
  thngTinLin: {
    top: 73,
    fontSize: FontSize.size_9xl,
    fontWeight: "800",
    fontFamily: FontFamily.interExtraBold,
    color: Color.dodgerblue,
    width: 236,
    height: 34,
    textAlign: "center",
    left: 88,
    position: "absolute",
  },
  phoneFill: {
    top: 198,
    left: 147,
    width: 9,
    height: 15,
    position: "absolute",
  },
  groupChildShadowBox: {
    backgroundColor: Color.dodgerblue,
    top: 0,
    left: 0,
    height: 143,
    width: 250,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    position: "absolute",
  },
  trngThnhT: {
    left: 0,
  },
  messageAltFillIcon: {
    top: 22,
  },
  socialIcons: {
    left: 121,
  },
  text: {
    left: 36,
    position: "absolute",
  },
  tait51498gmailcom: {
    left: 9,
    width: 155,
    position: "absolute",
  },
  socialIcons1: {
    left: 43,
    position: "absolute",
  },
  socialIcons2: {
    left: 69,
    position: "absolute",
  },
  socialIcons3: {
    left: 95,
    position: "absolute",
  },
  groupItem: {
    left: 27,
  },
  socialIcons4: {
    top: 44,
    height: 19,
    width: 20,
    overflow: "hidden",
  },
  messageAltFillParent: {
    left: 3,
    width: 164,
    top: 27,
    position: "absolute",
  },
  trngThnhTParent: {
    width: 167,
    left: 41,
    position: "absolute",
  },
  rectangleParent: {
    top: 141,
  },
  nguynCaoNhn: {
    left: 21,
  },
  messageAltFillIcon1: {
    top: 21,
  },
  socialIcons5: {
    left: 145,
  },
  text1: {
    width: 96,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_smi,
    color: Color.white,
    top: 0,
    height: 15,
    textAlign: "center",
  },
  caonhan27102000gmailcom: {
    width: 192,
    top: 19,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_smi,
    color: Color.white,
    height: 15,
    textAlign: "center",
  },
  socialIcons6: {
    left: 67,
    position: "absolute",
  },
  socialIcons7: {
    left: 93,
    position: "absolute",
  },
  socialIcons8: {
    left: 119,
    position: "absolute",
  },
  vectorIcon: {
    left: 51,
  },
  socialIcons9: {
    left: 41,
    position: "absolute",
  },
  messageAltFillGroup: {
    height: 64,
    top: 27,
    left: 0,
  },
  nguynCaoNhnParent: {
    left: 20,
    height: 92,
    top: 26,
  },
  rectangleGroup: {
    top: 615,
  },
  rectangleContainer: {
    top: 457,
  },
  nguynHongN: {
    left: 16,
  },
  socialIcons15: {
    left: 140,
  },
  text3: {
    left: 55,
    position: "absolute",
  },
  tinhtutrentroi360gmailcom: {
    left: 19,
    width: 180,
    position: "absolute",
  },
  socialIcons16: {
    left: 62,
    position: "absolute",
  },
  socialIcons17: {
    left: 88,
    top: 44,
    position: "absolute",
  },
  socialIcons18: {
    left: 114,
    position: "absolute",
  },
  groupChild3: {
    left: 46,
  },
  socialIcons19: {
    left: 36,
    position: "absolute",
  },
  messageAltFillParent1: {
    height: 64,
    top: 27,
    left: 0,
  },
  nguynHongNParent: {
    left: 25,
    height: 92,
    top: 26,
  },
  groupView: {
    top: 773,
  },
  trnDuyNhn: {
    left: 14,
  },
  socialIcons20: {
    left: 138,
  },
  text4: {
    left: 53,
    position: "absolute",
  },
  tranduynhan497gmailcom: {
    top: 20,
    left: 18,
    width: 178,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_smi,
    color: Color.white,
    height: 15,
    textAlign: "center",
    position: "absolute",
  },
  socialIcons21: {
    top: 45,
    height: 19,
    width: 20,
    overflow: "hidden",
  },
  socialIcons22: {
    left: 86,
    position: "absolute",
  },
  socialIcons23: {
    left: 112,
    position: "absolute",
  },
  groupChild5: {
    left: 44,
  },
  socialIcons24: {
    left: 34,
    position: "absolute",
  },
  messageAltFillParent2: {
    height: 64,
    top: 27,
    left: 0,
  },
  trnDuyNhnParent: {
    left: 27,
    height: 92,
    top: 26,
  },
  rectangleParent1: {
    top: 299,
  },
  thongtinlienhe: {
    backgroundColor: Color.white,
    flex: 1,
    width: "100%",
    height: 953,
    overflow: "hidden",
  },
});

export default Thongtinlienhe;
