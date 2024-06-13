import {
	DarkTheme,
	DefaultTheme,
	ThemeProvider,
} from "@react-navigation/native";
import { Stack } from "expo-router";
import React, { useEffect } from "react";
import { useColorScheme } from "react-native";
import "../global.css";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "@/firebase/auth";
import { GoogleSignin } from "@react-native-google-signin/google-signin";

export const unstable_settings = {
	initialRouteName: "(tabs)",
};

export default function RootLayout() {
	return <Layout />;
}

function Layout() {
	const colorScheme = useColorScheme();

	useEffect(() => {
		// signInWithPopup(auth, provider).then((result) => {
		// 	console.log({ result });
		// });

		// GoogleSignin.configure({
		// 	webClientId:
		// 		"48232012757-cf8amoa29e4uuikq45236i31b3gq9376.apps.googleusercontent.com",
		// });
	}, []);

	return (
		<ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
			<Stack>
				<Stack.Screen
					name="(tabs)"
					options={{
						headerShown: false,
						animation: "slide_from_right",
					}}
				/>
				<Stack.Screen
					name="modals/login"
					options={{
						headerShown: false,
						presentation: "modal",
						animation: "fade_from_bottom",
					}}
				/>
				<Stack.Screen
					name="modals/courseSearch"
					options={{
						headerShown: false,
						presentation: "modal",
						animation: "fade_from_bottom",
					}}
				/>
				<Stack.Screen
					name="modals/chatSearch"
					options={{
						headerShown: false,
						presentation: "modal",
						animation: "fade_from_bottom",
					}}
				/>
				<Stack.Screen
					name="modals/courseDetail"
					options={{
						title: "Detail course",
						presentation: "modal",
						animation: "fade_from_bottom",
						headerShadowVisible: false,
						headerStyle: { backgroundColor: "#039CCA" },
						headerTintColor: "white",
						headerTitleStyle: { fontSize: 16 },
					}}
				/>
				<Stack.Screen
					name="modals/detail-activity"
					options={{
						title: "Bài tập",
						presentation: "modal",
						animation: "fade_from_bottom",
						headerShadowVisible: false,
						headerStyle: { backgroundColor: "white" },
						headerTintColor: "black",
						headerTitleStyle: { fontSize: 16 },
						headerTitleAlign: "center",
					}}
				/>
				<Stack.Screen
					name="modals/detail-folder"
					options={{
						title: "Folder",
						presentation: "modal",
						animation: "fade_from_bottom",
						headerShadowVisible: false,
						headerStyle: { backgroundColor: "white" },
						headerTintColor: "black",
						headerTitleStyle: { fontSize: 16 },
						headerTitleAlign: "center",
					}}
				/>
				<Stack.Screen
					name="modals/detail-subject"
					options={{
						title: "Subject",
						presentation: "modal",
						animation: "simple_push",
						headerShadowVisible: false,
						headerStyle: { backgroundColor: "white" },
						headerTintColor: "black",
						headerTitleStyle: { fontSize: 16 },
						headerTitleAlign: "center",
					}}
				/>
				<Stack.Screen
					name="modals/chat-list"
					options={{
						title: "Nhắn tin",
						presentation: "modal",
						animation: "simple_push",
						headerShadowVisible: false,
						headerStyle: { backgroundColor: "white" },
						headerTintColor: "black",
						headerTitleStyle: { fontSize: 16 },
						headerTitleAlign: "center",
					}}
				/>
				<Stack.Screen
					name="modals/chat-room"
					options={{
						title: "Nhắn tin",
						presentation: "modal",
						animation: "slide_from_right",
						headerShadowVisible: false,
						headerStyle: { backgroundColor: "white" },
						headerTintColor: "black",
						headerTitleStyle: { fontSize: 16 },
						headerTitleAlign: "center",
					}}
				/>
				<Stack.Screen
					name="modals/google-integration"
					options={{
						title: "Google integration",
						presentation: "modal",
						animation: "fade_from_bottom",
						headerShadowVisible: false,
						headerStyle: { backgroundColor: "white" },
						headerTintColor: "black",
						headerTitleStyle: { fontSize: 16 },
						headerTitleAlign: "center",
					}}
				/>
				<Stack.Screen
					name="modals/notification-config"
					options={{
						title: "Cài đặt thông báo",
						presentation: "modal",
						animation: "slide_from_right",
						headerShadowVisible: true,
						headerStyle: { backgroundColor: "white" },
						headerTintColor: "black",
						headerTitleStyle: { fontSize: 16 },
						headerTitleAlign: "center",
					}}
				/>
				<Stack.Screen
					name="modals/makeup-classes"
					options={{
						title: "Các lớp học bù / HT2",
						presentation: "modal",
						animation: "slide_from_left",
						headerShadowVisible: true,
						headerStyle: { backgroundColor: "white" },
						headerTintColor: "black",
						headerTitleStyle: { fontSize: 16 },
						headerTitleAlign: "center",
					}}
				/>
				<Stack.Screen
					name="modals/sign-in-resolve"
					options={{
						headerShown: false,
						presentation: "modal",
						animation: "slide_from_right",
					}}
				/>
				<Stack.Screen
					name="modals/news-feed"
					options={{
						headerShown: false,
						presentation: "modal",
						animation: "slide_from_bottom",
					}}
				/>
				<Stack.Screen
					name="modals/detail-news-feed"
					options={{
						headerShown: false,
						presentation: "modal",
						animation: "simple_push",
					}}
				/>
				<Stack.Screen
					name="modals/recommend-path/home"
					options={{
						headerShown: false,
						presentation: "modal",
						animation: "slide_from_right",
					}}
				/>
				<Stack.Screen
					name="modals/recommend-path/result"
					options={{
						headerShown: false,
						presentation: "modal",
						animation: "slide_from_right",
					}}
				/>
			</Stack>
		</ThemeProvider>
	);
}
