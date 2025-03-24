import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import ThemeProvider from "../contexts/ThemeProvider";
import { StatusBar } from 'react-native';
import { useColorScheme } from "react-native";

export default function RootLayout() {
  const scheme = useColorScheme();
  const [loaded, error] = useFonts({
    'roboto-regular': require('../assets/fonts/Roboto-Regular.ttf'),
    'ComicNeue-Regular': require('../assets/fonts/ComicNeue-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return (
    <ThemeProvider>
      <StatusBar
        barStyle={scheme === "dark" ? "light-content" : "dark-content"}
        backgroundColor={scheme === "dark" ? "#000" : "#F1F7FF"}
      />
      <Stack screenOptions={{
        headerShown: false
      }}>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
    </ThemeProvider>
  );
}
