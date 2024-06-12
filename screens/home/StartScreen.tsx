/* eslint-disable prettier/prettier */
/* eslint-disable semi */
/* eslint-disable prettier/prettier */
/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */
/* eslint-disable quotes */
/* eslint-disable prettier/prettier */
/* eslint-disable prettier/prettier */
import React from "react";
import { SafeAreaView, View, ScrollView, Image, Text, StyleSheet, TouchableOpacity } from "react-native";

const StartScreen: React.FC<any> = ({navigation}) => {
	return (
		<SafeAreaView style={styles.container}>
			<ScrollView style={styles.scrollContainer}>
				<Image
					source={require("../assets/ChemCard.png")} 
					resizeMode="stretch"
					style={styles.image}
				/>
				<Text style={styles.title}>{"Chemistry Flashcard"}</Text>
				<Text style={styles.subtitle}>{"Học hóa mọi nơi, thỏa sức sáng tạo"}</Text>
				<TouchableOpacity  activeOpacity={0.7}onPress={() => navigation.navigate('NewTrangchu')}>
				<View style={styles.buttonContainer}>
					<Text style={styles.buttonText}>{"Khám phá ngay"}</Text>
				</View>
				</TouchableOpacity>
			</ScrollView>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#FFFFFF",
	},
	scrollContainer: {
		flex: 1,
		backgroundColor: "#2F3290",
		paddingTop: 100,
		paddingBottom: 166,
		paddingHorizontal: 22,
	},
	image: {
		height: 300,
		marginBottom: 65,
		alignItems:"center",
		alignSelf:"center",
		alignContent:'center',
	},
	title: {
		color: "#FFFFFF",
		fontSize: 28,
		fontWeight: "bold",
		marginBottom: 21,
        textAlign: 'center',
	},
	subtitle: {
		color: "#FFFFFF",
		fontSize: 18,
		fontWeight: "bold",
		marginBottom: 55,
        textAlign: 'center',

	},
	buttonContainer: {
		alignItems: "center",
		backgroundColor: "#FF6C17",
		borderRadius: 20,
		paddingVertical: 15,
	},
	buttonText: {
		color: "#FFFFFF",
		fontSize: 20,
		fontWeight: "bold",
	},
});

export default StartScreen;
