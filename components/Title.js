import { View, Text, StyleSheet } from "react-native";

export default function Title({ text }) {
  return <Text style={styles.text}>{text}</Text>;
}

const styles = StyleSheet.create({
  text: {
    textAlign: "center",
    fontSize: 24,
    color: "#ee980e",
  },
});
