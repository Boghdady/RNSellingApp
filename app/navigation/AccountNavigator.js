import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { Text } from "react-native";
import AccountScreen from "../screens/AccountScreen";
import MessagesScreen from "../screens/MessagesScreen";

const AccountNavigator = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen name="Account" component={AccountScreen} />
      <Stack.Screen
        name="Messages"
        component={MessagesScreen}
        options={({ navigation, route }) => ({
          headerBackTitleVisible: false,
        })}
      />
    </Stack.Navigator>
  );
};

export default AccountNavigator;
