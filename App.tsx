import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { TamaguiProvider } from "tamagui";
import { Button } from "tamagui";

import config from "./tamagui.config";

export default function App() {
  return (
    <TamaguiProvider config={config}>
      <View style={styles.container}>
        <Text>RN working</Text>
        <Button>Tamagui Button</Button>
        <StatusBar style="auto" />
      </View>
    </TamaguiProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
