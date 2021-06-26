import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { View, StyleSheet, TouchableOpacity, Platform } from "react-native";
import colors from "../config/colors";

export default function EditListButton({ onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <MaterialCommunityIcons
          name="plus-circle"
          size={40}
          color={colors.white}
        />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 80,
    width: 80,
    borderRadius: 40,
    backgroundColor: colors.primary,
    borderColor: colors.white,
    borderWidth: 6,
    alignItems: "center",
    justifyContent: "center",
    bottom: Platform.OS === "android" ? 28 : 20,
  },
});
