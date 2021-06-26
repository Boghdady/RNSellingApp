import { useFormikContext } from "formik";
import React from "react";
import ImageInputList from "../ImageInputList";
import ErrorMessage from "./ErrorMessage";

export default function FormImagePicker({ name }) {
  const { errors, setFieldValue, touched, values } = useFormikContext();
  const imagesUris = values[name];

  const handleAddImage = (uri) => {
    setFieldValue(name, [...imagesUris, uri]);
  };

  const handleRemoveImage = (uri) => {
    setFieldValue(
      name,
      imagesUris.filter((imageUri) => imageUri !== uri)
    );
  };
  return (
    <>
      <ImageInputList
        imageUris={values[name]}
        addImage={handleAddImage}
        removeImage={handleRemoveImage}
      />
      <ErrorMessage error={errors[name]} visable={touched[name]} />
    </>
  );
}
