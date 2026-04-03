import { VisitedProvider } from "@/context/VisitedContext";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <VisitedProvider>
        <StatusBar style="dark" />
        <Stack screenOptions={{ headerShown: false }} />
      </VisitedProvider>
    </SafeAreaProvider>
  );
}
