import React from "react";
import { View, FlatList, StyleSheet } from "react-native";
import { add } from "react-native-reanimated";
import Icon from "../components/Icon";
import ListItem from "../components/ListItem";
import Screen from "../components/Screen";

import colors from "../config/colors";

const menuItems = [
  {
    title: "My Listings",
    icon: {
      name: "format-list-bulleted",
      backgroundColor: colors.primary,
    },
  },
  {
    title: "My Messages",
    icon: {
      name: "email",
      backgroundColor: colors.secondary,
    },
    targetScreen: "Messages",
  },
];

export default function AccountScreen({ navigation }) {
  const ItemComponent = ({ item }) => (
    <ListItem
      title={item.title}
      IconComponent={
        <Icon
          name={item.icon.name}
          backgroundColor={item.icon.backgroundColor}
        />
      }
      onPress={() => navigation.navigate(item.targetScreen)}
    />
  );

  return (
    <Screen>
      <View style={styles.container}>
        <ListItem
          title="Ahmed Boghdady"
          subtitle="boghdady107@gmail.com"
          image={require("../assets/mosh.jpg")}
        />
      </View>

      <View style={styles.container}>
        <FlatList
          scrollEnabled={false}
          data={menuItems}
          keyExtractor={(menuItem) => menuItem.title}
          renderItem={ItemComponent}
        />
      </View>
      <View style={styles.container}>
        <ListItem
          title="Logout"
          IconComponent={<Icon name="logout" backgroundColor="#ffe66d" />}
        />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
    backgroundColor: "#fefefe",
  },
});
