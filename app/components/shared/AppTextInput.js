import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import defaultStyle from "../../config/styles";
import colors from "../../config/colors";

export default function AppTextInput({
  iconName,
  width = "100%",
  ...otherProps
}) {
  return (
    <View style={[styles.container, { width }]}>
      {iconName && (
        <MaterialCommunityIcons
          style={styles.icon}
          name={iconName}
          size={24}
          color={defaultStyle.colors.mediumGray}
        />
      )}
      <TextInput
        placeholderTextColor={colors.mediumGray}
        style={defaultStyle.text}
        {...otherProps}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 15,
    marginVertical: 10,
    backgroundColor: defaultStyle.colors.white,
    borderRadius: 15,
  },

  icon: {
    marginRight: 5,
  },
});
