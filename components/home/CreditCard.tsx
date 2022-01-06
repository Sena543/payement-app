import { View } from "../Themed";
import { StyleSheet, Text } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

export default function CreditCard() {
	const cc_bg_color = "#5d37fe";
	const cardDots = () => (
		<View
			style={{
				backgroundColor: "#fff",
				height: 6,
				width: 6,
				marginLeft: 2,
				marginRight: 2,
				marginTop: 5,
				borderRadius: 6,
			}}
		></View>
	);
	return (
		<View style={styles.root}>
			<View style={[styles.main, styles.shadowProp]}></View>
			<View
				style={{
					backgroundColor: cc_bg_color,
					display: "flex",
					flexDirection: "row",
					justifyContent: "space-between",
					width: "80%",
				}}
			>
				<View style={{ display: "flex", flexDirection: "row", backgroundColor: cc_bg_color }}>
					<View style={[styles.cc_circles, { position: "relative", left: 6 }]}></View>
					<View style={[styles.cc_circles, { position: "relative", right: 6 }]}></View>
				</View>
				<FontAwesome5 name="apple-pay" size={35} color="#fff" />
			</View>
			<View
				style={{
					display: "flex",
					flexDirection: "row",
					justifyContent: "space-between",
					backgroundColor: "#5d37fe",
					position: "relative",
					right: 31,
				}}
			>
				{cardDots()}
				{cardDots()}
				{cardDots()}
				{cardDots()}
				<View style={{ marginLeft: 12, marginRight: 2 }}></View>
				{cardDots()}
				{cardDots()}
				{cardDots()}
				{cardDots()}
				<View style={{ marginLeft: 12, marginRight: 2 }}></View>
				{cardDots()}
				{cardDots()}
				{cardDots()}
				{cardDots()}
				<View style={{ marginLeft: 12, marginRight: 2 }}></View>
				{<Text style={{ color: "#fff" }}>1</Text>}
				{<Text style={{ color: "#fff" }}>2</Text>}
				{<Text style={{ color: "#fff" }}>3</Text>}
				{<Text style={{ color: "#fff" }}>4</Text>}
			</View>
			<View
				style={{
					backgroundColor: cc_bg_color,
					display: "flex",
					flexDirection: "row",
					justifyContent: "space-between",
					width: "80%",
					marginTop: 10,
					position: "relative",
					left: 6,
				}}
			>
				<View style={{ backgroundColor: cc_bg_color }}>
					<Text style={{ color: "#fff" }}>VALID THRU</Text>
					<Text style={{ color: "#fff", marginTop: 5 }}>05/21</Text>
				</View>
				<View style={{ backgroundColor: cc_bg_color }}>
					<Text style={{ color: "#fff" }}>CARD HOLDER</Text>
					<Text style={{ color: "#fff", marginTop: 5 }}>Frost, Jack</Text>
				</View>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	root: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		width: "90%",
		height: "100%",
		marginTop: 20,
	},
	main: {
		flex: 1,
		backgroundColor: "#5d37fe",
		borderRadius: 25,
		width: "100%",
		height: "80%",
		zIndex: -1,
		position: "absolute",
	},
	cc_circles: {
		backgroundColor: "rgb(220,226,245)",
		height: 30,
		width: 30,
		borderRadius: 30,
		opacity: 0.5,
	},
	shadowProp: {
		shadowOffset: { width: 3, height: 4 },
		shadowOpacity: 0.2,
		shadowRadius: 5,
		shadowColor: "#bbc0e0",
	},
});
