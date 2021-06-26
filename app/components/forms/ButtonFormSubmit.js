import { useFormikContext } from "formik";
import React from "react";
import { View, Text } from "react-native";
import AppButton from "../shared/AppButton";

export default function ButtonFormSubmit({ title, ...otherProps }) {
  const { handleSubmit } = useFormikContext();
  return <AppButton title={title} onPress={handleSubmit} {...otherProps} />;
}
