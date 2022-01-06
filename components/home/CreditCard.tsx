import { View } from "../Themed";
import { StyleSheet, Text } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

export default function CreditCard() {
	const cc_bg_color = "rgba(89,54,235, 0)";
	const cardDots = () => (
		<View
			style={{
				backgroundColor: "#fff",
				height: 4,
				width: 4,
				marginTop: 6,
				borderRadius: 4,
			}}
		></View>
	);
	return (
		<View style={styles.root}>
			<View style={[styles.main, styles.shadowProp]}>
				<View
					style={{
						backgroundColor: cc_bg_color,
						display: "flex",
						flexDirection: "row",
						justifyContent: "space-between",
						width: "80%",
						margin: 15,
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
						backgroundColor: cc_bg_color,
						margin: 15,
						width: "90%",
					}}
				>
					{cardDots()}
					{cardDots()}
					{cardDots()}
					{cardDots()}
					<View style={{ marginLeft: 1, marginRight: 1 }}></View>
					{cardDots()}
					{cardDots()}
					{cardDots()}
					{cardDots()}
					<View style={{ marginLeft: 1, marginRight: 1 }}></View>
					{cardDots()}
					{cardDots()}
					{cardDots()}
					{cardDots()}
					<View style={{ marginLeft: 1, marginRight: 1 }}></View>
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
						margin: 10,
					}}
				>
					<View style={{ backgroundColor: cc_bg_color }}>
						<Text style={{ color: "#fff" }}>VALID THRU</Text>
						<Text style={{ color: "#fff", marginTop: 15 }}>05/21</Text>
					</View>
					<View style={{ backgroundColor: cc_bg_color }}>
						<Text style={{ color: "#fff" }}>CARD HOLDER</Text>
						<Text style={{ color: "#fff", marginTop: 15 }}>Frost, Jack</Text>
					</View>
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
		width: "95%",
		marginTop: 2,
	},
	main: {
		flex: 1,
		display: "flex",
		justifyContent: "space-evenly",
		backgroundColor: "#5d37fe",
		borderRadius: 25,
		width: "100%",
		height: "5%",
	},
	cc_circles: {
		backgroundColor: "rgb(220,226,245)",
		height: 30,
		width: 30,
		borderRadius: 30,
		opacity: 0.5,
	},
	shadowProp: {
		shadowOffset: { width: 4, height: 10 },
		shadowOpacity: 0.5,
		shadowRadius: 5,
		shadowColor: "#6e6d72",
		// shadowColor: "#bbc0e0",
	},
});
