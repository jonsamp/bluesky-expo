import { View, Text } from "react-native";
import { Stack } from "expo-router";
import { Drawer } from "expo-router/drawer";

export default function App() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: "white" },
      }}
    >
      <Stack.Screen name="details" options={{ headerShown: true }} />
      <Stack.Screen name="new-post" options={{ presentation: "modal" }} />
      <Stack.Screen name="profile" options={{ headerShown: true }} />
    </Stack>
  );
}
