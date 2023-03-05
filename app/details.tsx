import { Text, View } from "react-native";
import { Tabs } from "expo-router";

export default function Details() {
  return (
    <View style={{ paddingHorizontal: 40, paddingVertical: 40 }}>
      <Tabs.Screen options={{ headerShown: true }} />
      <Text>Details screen</Text>
    </View>
  );
}
