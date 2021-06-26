import React from "react";
import { View } from "react-native";
import { ScaledSheet } from "react-native-size-matters";
import { TextInput } from "react-native-paper";

export default function PaperInput(props) {
  return (
    <View style={styles.container}>
      <TextInput
        label="Email"
        // error={true}
        style={{ backgroundColor: "white" }}
      />
    </View>
  );
}

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    alignContent: "center",
    justifyContent: "center",
    paddingHorizontal: 10,
  },
});
