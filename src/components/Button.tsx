import React from "react";
import { TouchableOpacity, Text, StyleSheet, View } from "react-native";

interface Props {
  text: string;
  onPress: () => void;
}
export const Button: React.FC<Props> = ({ text, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#0d469b",
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 4,
    alignItems: "center",
    marginTop: 20,
    width: "100%",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});
