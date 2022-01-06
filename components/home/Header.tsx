import { Ionicons, FontAwesome } from "@expo/vector-icons";
import { StyleSheet, TextInput } from "react-native";
import { View } from "../Themed";
import Colors from "../../constants/Colors";
import useColorScheme from "../../hooks/useColorScheme";

function Home_Header() {
	const colorScheme = useColorScheme();
	return (
		<View style={styles.root}>
			<View style={styles.main}>
				<View style={{ display: "flex", flexDirection: "row" }}>
					<Ionicons color={Colors[colorScheme].tabIconDefault} size={20} name="search" />
					<TextInput placeholder="Search" style={styles.textInput} />
				</View>
				<Ionicons color={Colors[colorScheme].tabIconDefault} size={20} name="notifications" />
				<FontAwesome color={Colors[colorScheme].tabIconDefault} name="ellipsis-v" size={20} />
			</View>
			<View style={{ borderBottomWidth: 0.1, borderBottomColor: "#a3a3a3" }}></View>
		</View>
	);
}

export default Home_Header;

const styles = StyleSheet.create({
	root: {
		backgroundColor: "#fff",
		marginTop: 20,
	},
	main: {
		margin: 10,
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
	},
	textInput: {
		marginLeft: 2,
	},
});
