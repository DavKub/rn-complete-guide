import React from "react";
import { StyleSheet, View, Text, TextInput, Button } from "react-native";

export default function App() {
  return (
    <View style={styles.root}>
      <View style={styles.inputContainer}>
        <TextInput placeholder="Goal" style={styles.input} />
        <Button title="Add" />
      </View>
      <View></View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    padding: 50,
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  input: {
    borderColor: "black",
    borderWidth: 1,
    paddingHorizontal: 80,
    paddingVertical: 5,
  },
});
