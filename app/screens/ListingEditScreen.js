import React, { useState, useEffect } from "react";
import { Text, StyleSheet, ScrollView, View, Button } from "react-native";
import * as Yup from "yup";

import CategoryPickerItem from "../components/CategoryPickerItem";
import apiListings from "../api/listings";

import {
  AppForm,
  AppFormField,
  ButtonFormSubmit,
  FormImagePicker,
} from "../components/forms";
import AppFormPicker from "../components/forms/AppFormPicker";
import Screen from "../components/Screen";
import colors from "../config/colors";

const categories = [
  {
    backgroundColor: colors.red,
    icon: "floor-lamp",
    label: "Furniture",
    value: 1,
  },
  { label: "Cars", icon: "car", backgroundColor: colors.orange, value: 1 },
  {
    label: "Cameras",
    icon: "camera",
    backgroundColor: colors.yellow,
    value: 1,
  },
  { label: "Games", icon: "cards", backgroundColor: colors.green, value: 2 },
  {
    label: "Clothing",
    icon: "apple",
    backgroundColor: colors.cyan,
    value: 3,
  },
  {
    label: "Sports",
    icon: "basketball",
    backgroundColor: colors.brightBlue,
    value: 3,
  },
  {
    label: "Movies & Music",
    icon: "headphones",
    backgroundColor: colors.softBlue,
    value: 3,
  },
  {
    label: "Books",
    icon: "book-open-variant",
    backgroundColor: colors.purple,
    value: 2,
  },
  {
    label: "Other",
    icon: "folder-outline",
    backgroundColor: colors.grey,
    value: 1,
  },
];

const ListingEditSchema = Yup.object().shape({
  title: Yup.string().required().label("Title"),
  price: Yup.number().required().max(10000).label("Price"),
  description: Yup.string().optional().label("Description"),
  category: Yup.object().nullable(),
  images: Yup.array().min(1, "Please select at least one image"),
});

export default function ListingEditScreen({ navigation }) {
  const handleSubmit = async (listings) => {
    const response = await apiListings.addListing(listings, (progress) =>
      console.log(progress)
    );
    if (!response.ok) return console.log(response.originalError);
    alert("Success");
  };
  return (
    <Screen>
      <View style={styles.contrainer}>
        <AppForm
          initialValues={{
            title: "",
            price: "",
            description: "",
            category: null,
            images: [],
          }}
          onSubmit={handleSubmit}
          validationSchema={ListingEditSchema}
        >
          <FormImagePicker name="images" />
          <AppFormField
            name="title"
            placeholder="Title"
            autoCapitalize="none"
            autoCorrect={false}
            maxLenght={255}
          />
          <AppFormField
            name="price"
            placeholder="Price"
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="numeric"
            maxLength={8}
            width={120}
          />
          <AppFormPicker
            name="category"
            placeholder="Category"
            width="60%"
            items={categories}
            PickerItemComponent={CategoryPickerItem}
            numberOfColumns={3}
          />
          <AppFormField
            name="description"
            placeholder="description"
            autoCapitalize="none"
            autoCorrect={false}
            maxLenght={255}
            multiline
            numberOfLines={3}
          />

          {/* <Button title="Edit" onPress={() => console.log("object")} /> */}
          <ButtonFormSubmit title="Edit" />
        </AppForm>
      </View>
    </Screen>
  );
}
const styles = StyleSheet.create({
  contrainer: {
    padding: 20,
    // backgroundColor:"red"
  },
});
