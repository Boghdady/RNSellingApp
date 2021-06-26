import React from "react";
// import Constants from "expo-constants";

import { StyleSheet, SafeAreaView, View, Platform } from "react-native";
import colors from "../config/colors";

function Screen({ children, style }) {
  return (
    <SafeAreaView style={[styles.screen, style]}>
      <View style={[styles.view, style]}>{children}</View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    paddingTop: Platform.OS === "android" ? 0 : 0,
    flex: 1,
    backgroundColor: colors.lightGray,
  },
  view: {
    flex: 1,
  },
});

export default Screen;
