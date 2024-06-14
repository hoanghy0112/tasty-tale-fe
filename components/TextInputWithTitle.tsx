import { View, TextInput, Text, KeyboardTypeOptions } from "react-native";

type Props = {
	title: string;
	value: string;
	type?: KeyboardTypeOptions;
	onChangeText: (text: string) => any;
};

export default function TextInputWithTitle({
	title,
	value,
	type,
	onChangeText,
}: Props) {
	return (
		<View style={{ display: "flex", flexDirection: "column", gap: 4 }}>
			<Text style={{ fontWeight: "500" }}>{title}</Text>
			<TextInput
				style={{
					borderBottomWidth: 1,
					fontSize: 16,
				}}
				keyboardType={type}
				onChangeText={onChangeText}
				// value={value}
			/>
		</View>
	);
}
