import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TextInput } from "react-native";
import Notes from "./components/Notes.js";

export default function App() {
  return (
    <View style={styles.container}>
      <Notes />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    height: 20,
    width: 100,
    padding: 10,
  },
});
