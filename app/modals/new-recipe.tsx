import TextInputWithTitle from "@/components/TextInputWithTitle";
import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import ImageSelector from "@/components/ImageSelector";
import IngredientSelector from "@/components/IngredientSelector";

export default function Modal() {
	return (
		<SafeAreaView
			style={{
				display: "flex",
				flexDirection: "column",
				width: "100%",
				height: "100%",
				backgroundColor: "white",
				paddingHorizontal: 16,
			}}
		>
			<ScrollView>
				<Text
					style={{
						fontWeight: "600",
						fontSize: 20,
						marginBottom: 60,
						marginTop: 20,
					}}
				>
					Create new recipe
				</Text>
				<View style={{ display: "flex", flexDirection: "column", gap: 50 }}>
					<TextInputWithTitle
						title="Name"
						value=""
						onChangeText={() => {}}
					/>
					<TextInputWithTitle
						title="Description"
						value=""
						onChangeText={() => {}}
					/>
					<TextInputWithTitle
						title="Time to cook"
						value=""
						type={"number-pad"}
						onChangeText={() => {}}
					/>
					<ImageSelector title="Images" />
					<IngredientSelector />
				</View>
			</ScrollView>
		</SafeAreaView>
	);
}
