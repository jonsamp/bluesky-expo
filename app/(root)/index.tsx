import { Text, View, StyleSheet, Pressable, ScrollView } from "react-native";
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
          <Link href="/profile" asChild style={{
            position: "absolute",
            left: 16,
            top: 4,
          }}>
            <Pressable>
          <View
            style={{
              height: 32,
              width: 32,
              backgroundColor: "blue",
              borderRadius: 1000,
            }}
          />
            </Pressable>
          </Link>
          <Text style={{ fontWeight: "600", fontSize: 20 }}>Bluesky</Text>
          <View />
        </View>
      </SafeAreaView>
      <ScrollView
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingVertical: 20,
          height: "100%",
        }}
      >
        <Text>Home page tab</Text>

        <Link href="/details" style={{ paddingVertical: 20 }}>@pfrazee.com: ✅ was able to set handle using app dev build</Link>
        <View style={{ position: 'absolute', bottom: 140, right: 16}}>
        <Link href="/new-post" asChild>
          <Pressable style={{ height: 50, width: 50, backgroundColor: 'blue', borderRadius: 1000, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ fontWeight: '600', fontSize: 40, lineHeight: 0, color: 'white', top: -2 }}>+</Text>
          </Pressable>
        </Link>
        </View>
    </ScrollView >
      </View>
  );
}
