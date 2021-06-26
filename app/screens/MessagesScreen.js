import React from "react";
import { useState, useEffect } from "react";
import {
  SafeAreaView,
  FlatList,
  StyleSheet,
  Platform,
  StatusBar,
  View,
} from "react-native";
import ItemSeparator from "../components/ItemSeparator";
// import Constants from "expo-constants";
import ListItem from "../components/ListItem";

const initMessages = [
  {
    id: 1,
    title: "title-1",
    subtitle: "sub-1",
    image: require("../assets/mosh.jpg"),
  },
  {
    id: 2,
    title: "title-2",
    subtitle: "sub-2",
    image: require("../assets/mosh.jpg"),
  },
  {
    id: 3,
    title: "title-3",
    subtitle: "sub-3",
    image: require("../assets/mosh.jpg"),
  },
  {
    id: 4,
    title: "title-4",
    subtitle: "sub-4",
    image: require("../assets/mosh.jpg"),
  },
];

export default function MessagesScreen({ navigation }) {
  const [messages, setMessages] = useState(initMessages);
  const [refreshing, setRefreshing] = useState(false);

  const handleDelete = (message) => {
    const newMessages = messages.filter((m) => m.id !== message.id);
    setMessages(newMessages);
  };

  const item = ({ item }) => (
    <ListItem
      title={item.title}
      subtitle={item.subtitle}
      image={item.image}
      onPress={() => handleDelete(item)}
    />
  );
  return (
    <SafeAreaView style={styles.screen}>
      <FlatList
        data={messages}
        renderItem={item}
        keyExtractor={(item) => item.id.toString()}
        ItemSeparatorComponent={() => <ItemSeparator />}
        refreshing={refreshing}
        onRefresh={() => {
          setMessages([
            {
              id: 1,
              title: "title-1",
              subtitle: "sub-1",
              image: require("../assets/mosh.jpg"),
            },
            {
              id: 2,
              title: "title-2",
              subtitle: "sub-2",
              image: require("../assets/mosh.jpg"),
            },
          ]);
        }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    flex: 1,
  },
});

// 1- list item with margin container
// 2- flatList with two lsit items
// 3- List item with margin container
