import TextInputWithTitle from "@/components/TextInputWithTitle";
import { FlatList, ScrollView, Text, View, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import PrimaryButton from "@/components/PrimaryButton";
import * as ImagePicker from "expo-image-picker";
import { useState } from "react";
import ImageSelector from "@/components/ImageSelector";

export default function Modal() {
	const [images, setImages] = useState<ImagePicker.ImagePickerAsset[]>([]);

	const pickImage = async () => {
		let result = await ImagePicker.launchImageLibraryAsync({
			mediaTypes: ImagePicker.MediaTypeOptions.All,
			allowsEditing: false,
			aspect: [1, 1],
			quality: 1,
			allowsMultipleSelection: true,
		});

		if (!result.canceled) {
			setImages(result.assets);
		}
	};
	console.log({ images });

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
				</View>
			</ScrollView>
		</SafeAreaView>
	);
}
