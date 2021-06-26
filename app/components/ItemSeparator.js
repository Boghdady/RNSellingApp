import React from "react";
import { View, Text, StyleSheet } from "react-native";
import colors from "../config/colors";

export default function ItemSeparator() {
  return <View style={styles.separator} />;
}

const styles = StyleSheet.create({
  separator: {
    width: "100%",
    height: 0.5,
    backgroundColor: colors.mediumGray,
  },
});
