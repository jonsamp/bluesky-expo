import { Text, View } from "react-native";
import { Link } from "expo-router";

export default function Notifications() {
  return (
    <View style={{ paddingHorizontal: 40, paddingVertical: 100 }}>
      <Text>Notifications tab</Text>
      <Link href="/details">Go to details</Link>
    </View>
  );
}
