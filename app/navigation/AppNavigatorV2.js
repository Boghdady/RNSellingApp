import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import ListingEditScreen from "../screens/ListingEditScreen";
import AccountScreen from "../screens/AccountScreen";
import ListengsScreen from "../screens/ListengsScreen";

import ListingDetailsScreen from "../screens/ListingDetailsScreen";
import MessagesScreen from "../screens/MessagesScreen";

import EditListButton from "./EditListButton";
import routes from "./routes";
import { Platform } from "react-native";

const Tab = createBottomTabNavigator();
const HomeTabs = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        style: {
          // paddingBottom: Platform.OS === "android" ? 5 : 10,
        },
      }}
    >
      <Tab.Screen
        name={routes.LISTINGS}
        component={ListengsScreen}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name={routes.LISTINGS_EDIT}
        component={ListingEditScreen}
        options={({ navigation, route }) => ({
          tabBarButton: () => (
            <EditListButton
              onPress={() => navigation.navigate(routes.LISTINGS_EDIT)}
            />
          ),
        })}
      />
      <Tab.Screen
        name={routes.ACCOUNT}
        component={AccountScreen}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons name="account" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const AppNavigatorV2 = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeTabs}
        // options={{ headerShown: false }}
      />
      <Stack.Screen
        name={routes.LISTING_DETAILS}
        component={ListingDetailsScreen}
        options={{ title: "Item Details", headerBackTitleVisible: false }}
      />
      <Stack.Screen
        name={routes.MESSAGES}
        component={MessagesScreen}
        options={({ navigation, route }) => ({
          headerBackTitleVisible: false,
        })}
      />
    </Stack.Navigator>
  );
};

export default AppNavigatorV2;
