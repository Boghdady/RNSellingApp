import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function ErrorMessage({ error, visable }) {
  if (!error || !visable) return null;
  return (
    <View>
      <Text style={styles.text}>{error}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    color: "red",
  },
});
