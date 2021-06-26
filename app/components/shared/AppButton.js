import React from "react";
import { View, Button, StyleSheet } from "react-native";

import colors from "../../config/colors";

export default function AppButton({ title, onPress, ...otherProps }) {
  return (
    <View style={styles.container}>
      <Button
        title={title}
        onPress={onPress}
        color={colors.white}
        {...otherProps}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    borderRadius: 10,
    marginTop: 10,
  },
});
