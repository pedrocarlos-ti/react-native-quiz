import React from "react";
import { TouchableOpacity, Text, StyleSheet, View } from "react-native";

import { Ionicons } from "@expo/vector-icons";

const styles = StyleSheet.create({
  button: {
    backgroundColor: "rgba(255,255,255,0.3)",
    borderRadius: 10,
    paddingVertical: 15,
    alignItems: "center",
    justifyContent: "center",
    width: "46%",
    marginTop: 20,
  },
  backButton: {
    marginVertical: 10,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  text: {
    color: "#fff",
    fontSize: 20,
    textAlign: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginTop: 20,
  },
});

export const Button = ({ text, onPress = () => null }) => (
  <TouchableOpacity onPress={onPress} style={styles.button}>
    <Text style={styles.text}>{text}</Text>
  </TouchableOpacity>
);

export const ButtonContainer = ({ children }) => (
  <View style={styles.buttonContainer}>{children}</View>
);
