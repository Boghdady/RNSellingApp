import React from "react";
import { View, Text, StyleSheet } from "react-native";
import colors from "../config/colors";

export default function ListItemSeparator() {
  return <View style={styles.separator} />;
}

const styles = StyleSheet.create({
  separator: {
    width: "100%",
    height: 2,
    color: "#000",
  },
});
