import React from "react";
import { View, Image, StyleSheet, Text, TouchableOpacity } from "react-native";
import colors from "../config/colors";
import AppText from "../shared/AppText";

export default function Card({ title, price, image, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.card}>
        <Image style={styles.image} source={{ uri: image }} />
        <View style={styles.detailsContainer}>
          <AppText style={styles.title}>{title}</AppText>
          <AppText style={styles.price}>{price}</AppText>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    overflow: "hidden",
    borderRadius: 10,
    backgroundColor: colors.white,
    marginBottom: 20,
    height: 300,
    width: "100%",
  },
  image: {
    width: "100%",
    height: 200,
  },
  detailsContainer: {
    padding: 20,
  },
  title: {
    fontWeight: "bold",
    marginBottom: 10,
  },
  price: {
    fontWeight: "bold",
    color: colors.secondary,
  },
});
