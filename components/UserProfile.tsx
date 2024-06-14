import { User } from "@/types/User";
import { Image, Text, TouchableNativeFeedback, View } from "react-native";
import { ThemedText } from "./ThemedText";
import { router } from "expo-router";

type Props = {
	user: {
		displayname: string;
		photoUrl: string;
	};
};

export default function UserProfile({ user }: Props) {
	return (
		<View style={{ marginTop: 20, borderRadius: 12, overflow: "hidden" }}>
			<TouchableNativeFeedback
				onPress={() => {
					router.push("/modals/create-new-item");
				}}
			>
				<View
					style={{
						display: "flex",
						flexDirection: "row",
						alignItems: "center",
						gap: 20,
						padding: 8,
						borderRadius: 12,
						overflow: "hidden",
					}}
				>
					<View
						style={{
							width: 50,
							height: 50,
							backgroundColor: "#ddd",
							borderRadius: 50,
							overflow: "hidden",
						}}
					>
						{user.photoUrl ? (
							<Image
								src={user.photoUrl}
								style={{ width: 50, height: 50 }}
							/>
						) : null}
					</View>
					<View
						style={{
							display: "flex",
							justifyContent: "space-between",
							flexDirection: "column",
						}}
					>
						<Text style={{ fontWeight: "600", fontSize: 20 }}>
							{`Hi, ${user.displayname}`}
						</Text>
						<View
							style={{
								marginTop: 8,
								display: "flex",
								flexDirection: "row",
								gap: 20,
							}}
						>
							<Text
								style={{
									color: "#636773",
									fontWeight: "500",
									fontSize: 14,
								}}
							>
								What are you cooking today?
							</Text>
						</View>
					</View>
				</View>
			</TouchableNativeFeedback>
		</View>
	);
}
