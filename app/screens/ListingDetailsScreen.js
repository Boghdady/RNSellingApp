import React from "react";
import { View, Image, StyleSheet } from "react-native";
import colors from "../config/colors";
import AppText from "../shared/AppText";
import ListItem from "../components/ListItem";

export default function ListingDetailsScreen({ route }) {
  const item = route.params.item;

  return (
    <View>
      <Image style={styles.image} source={item.image} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>{item.title}</AppText>
        <AppText style={styles.price}>{item.price}</AppText>
      </View>

      <View style={styles.userContainer}>
        <ListItem
          image={require("../assets/mosh.jpg")}
          title="Ahmed Boghdady"
          subtitle="Listed items"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    height: "60%",
    width: "100%",
  },
  detailsContainer: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "600",
  },
  price: {
    fontSize: 20,
    fontWeight: "500",
    color: colors.secondary,
  },
  userContainer: {
    padding: 20,
  },
});
