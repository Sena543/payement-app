import { View } from "../Themed";
import { StyleSheet, Text } from "react-native";
import { BarChart } from "react-native-chart-kit";

function Charts() {
	const barData = {
		labels: ["January", "February", "March", "April", "May", "June"],
		datasets: [
			{
				data: [5000, 2120, 200, 8326, 7122, 1000],
				color: (opacity = 1) => `rgba(30, 54, 148, ${opacity})`, // optional
			},
		],
	};

	const chartConfig = {
		backgroundColor: "#ffffff",
		backgroundGradientFrom: "#0091EA",
		backgroundGradientTo: "#0091EA",
		color: (opacity = 1) => `rgba(${255}, ${255}, ${255}, ${opacity})`,
	};

	const graphStyle = {
		backgroundColor: "#fff",
	};
	const onGetLayout = (event: { event: Event }) => {
		const { x, y, height, width } = event?.nativeEvent?.layout;
		console.log(x, y, height, width);
		return { x, y, height, width };
	};

	return (
		<View style={styles.root} onLayout={onGetLayout}>
			<BarChart
				style={graphStyle}
				data={barData}
				width={356}
				height={264}
				yAxisLabel={"$"}
				chartConfig={chartConfig}
			/>
		</View>
	);
}

export default Charts;

const styles = StyleSheet.create({
	root: {
		flex: 2,
		backgroundColor: "#fff",
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
