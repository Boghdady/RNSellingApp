import React, { useRef } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import ImageInput from "./ImageInput";

export default function ImageInputList({
  imageUris = [],
  removeImage,
  addImage,
}) {
  const scrollViewRef = useRef();
  return (
    <View>
      <ScrollView
        ref={scrollViewRef}
        horizontal={true}
        onContentSizeChange={() => scrollViewRef.current.scrollToEnd()}
        showsHorizontalScrollIndicator={false}
      >
        <View style={styles.container}>
          {imageUris &&
            imageUris.map((uri) => (
              <View style={styles.imageInput} key={uri}>
                <ImageInput
                  imageUri={uri}
                  onChangeImage={() => removeImage(uri)}
                />
              </View>
            ))}
          <ImageInput onChangeImage={addImage} />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  imageInput: {
    marginRight: 10,
  },
});
