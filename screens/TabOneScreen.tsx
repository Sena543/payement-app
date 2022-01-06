import { StyleSheet } from "react-native";

import EditScreenInfo from "../components/EditScreenInfo";
import CreditCard from "../components/home/CreditCard";
import { Text, View } from "../components/Themed";
import { RootTabScreenProps } from "../types";

export default function TabOneScreen({ navigation }: RootTabScreenProps<"TabOne">) {
	return (
		<View style={styles.container}>
			<CreditCard />
			<Text style={styles.title}>This is a test for the home screen.</Text>
			<View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
			<EditScreenInfo path="/screens/TabOneScreen.tsx" />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
	title: {
		fontSize: 20,
		flex: 1,
		fontWeight: "bold",
	},
	separator: {
		// flex: 1,
		marginVertical: 30,
		height: 1,
		width: "80%",
	},
});
