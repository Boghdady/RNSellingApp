import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import ListengsScreen from "../screens/ListengsScreen";
import ListingDetailsScreen from "../screens/ListingDetailsScreen";

const ListeningsNavigator = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen name="Listenings" component={ListengsScreen} />
      <Stack.Screen
        name="ListeningDetails"
        component={ListingDetailsScreen}
        options={{ title: "", headerBackTitleVisible: false }}
      />
    </Stack.Navigator>
  );
};

export default ListeningsNavigator;
