import { Stack } from "expo-router";
import {useFonts} from "expo-font";
import { ClerkProvider, SignedIn,SignedOut } from "@clerk/clerk-expo"
import { Text } from "react-native"
import LoginScreen from './../components/LoginScreen'
import LoginPage from './../components/LoginPage'

export default function RootLayout() {
  useFonts({
    'outfit': require("./../assets/fonts/Outfit-Regular.ttf"),
    'outfit-medium': require("./../assets/fonts/Outfit-Medium.ttf"),
    'outfit.bold': require("./../assets/fonts/Outfit-SemiBold.ttf"),
  });
  return (
    <ClerkProvider
      publishableKey={process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY}
    >
      <SignedIn>
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        </Stack>
      </SignedIn>

      <SignedOut>
        <LoginPage/>
      </SignedOut>
    </ClerkProvider>
  );
}
