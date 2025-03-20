import { useFonts } from "expo-font";
import {  Stack } from "expo-router";
import * as SplashScreen  from "expo-splash-screen";
import { useEffect } from "react";

export default function RootLayout() {
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
  return <Stack screenOptions={{
    headerShown:false
  }}>
  </Stack>;
}
