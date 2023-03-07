import { Text, View, StyleSheet } from "react-native";
import { Link } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Home(props) {
  return (
    <View>
      <SafeAreaView
        edges={["top"]}
        style={{
          backgroundColor: "white",
          borderBottomColor: "#ccc",
          borderBottomWidth: StyleSheet.hairlineWidth,
          paddingBottom: 8,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            height: 40,
            justifyContent: "center",
            alignItems: "center",
            paddingHorizontal: 16,
          }}
        >
          <View
            style={{
              height: 32,
              width: 32,
              backgroundColor: "blue",
              position: "absolute",
              left: 16,
              borderRadius: 1000,
            }}
          />
          <Text style={{ fontWeight: "600", fontSize: 20 }}>Bluesky</Text>
          <View />
        </View>
      </SafeAreaView>
      <View
        style={{
          paddingHorizontal: 16,
          paddingVertical: 20,
          backgroundColor: "white",
          height: "100%",
        }}
      >
        <Text>Home page tab</Text>
        <Link href="/details">Go to details</Link>
        <Link href="/profile">Go to profile</Link>
        <Link href="/new-post">New post!</Link>
      </View>
    </View>
  );
}
