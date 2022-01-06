import { FontAwesome } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text } from "react-native";
import Colors from "../../constants/Colors";
import useColorScheme from "../../hooks/useColorScheme";
import { View } from "../Themed";

export default function ExpenditureGraph() {
	const colorScheme = useColorScheme();
	const graph_bg_color = "rgba(254,251,255,255)";
	return (
		<View style={styles.container}>
			<View
				style={{
					display: "flex",
					flexDirection: "row",
					justifyContent: "space-between",
					backgroundColor: "#fff",
					width: "90%",
					margin: 5,
				}}
			>
				<Text style={{ fontSize: 20, fontWeight: "bold", margin: 5 }}>Last costs</Text>
				<FontAwesome color={Colors[colorScheme].tabIconDefault} name="ellipsis-h" size={30} />
			</View>
			<View
				style={{
					width: "100%",
					display: "flex",
					flexDirection: "row",
					justifyContent: "space-evenly",
					backgroundColor: "rgba(255, 255, 255, 0)",
				}}
			>
				<View style={{ display: "flex", flexDirection: "row", backgroundColor: "rgba(255, 255, 255, 0)" }}>
					<View
						style={{ width: 15, height: 5, borderRadius: 4, backgroundColor: "#5d37fe", marginTop: 20 }}
					></View>
					<Text style={{ color: "#857fa3", marginTop: 15 }}>Personal</Text>
				</View>
				<View
					style={{
						display: "flex",
						flexDirection: "row",
						backgroundColor: "rgba(255, 255, 255, 0)",
					}}
				>
					<View
						style={{ width: 15, height: 5, borderRadius: 4, backgroundColor: "#aaacbc", marginTop: 20 }}
					></View>
					<Text style={{ color: "#857fa3", marginTop: 15 }}>Spending</Text>
				</View>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1.5,
		backgroundColor: "#fefbff",
		margin: 10,
		width: "95%",
		borderRadius: 20,
	},
});
