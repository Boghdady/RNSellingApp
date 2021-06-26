import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { View, StyleSheet, TouchableOpacity, Dimensions } from "react-native";
import AppText from "../shared/AppText";

const width = Dimensions.get("screen").width / 3;
export default function CategoryPickerItem({ item, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <MaterialCommunityIcons
          name={item.icon}
          color={item.backgroundColor}
          size={40}
        />
        <AppText style={styles.label}>{item.label}</AppText>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    paddingHorizontal: 30,
    paddingVertical: 15,
    width,
  },
  label: {
    textAlign: "center",
    marginTop: 5,
  },
});
