import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";

import AuthNavigator from "./app/navigation/AuthNavigator";
import navigationTheme from "./app/navigation/navigationTheme";
import AppNavigator from "./app/navigation/AppNavigator";
import AppNavigatorV2 from "./app/navigation/AppNavigatorV2";
import PaperInput from "./app/playground/PaperInput";

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer theme={navigationTheme}>
        {/* <AuthNavigator /> */}
        {/* <AppNavigator /> */}
        <AppNavigatorV2 />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
