import React from "react";
import { View, StyleSheet, Modal, Text } from "react-native";
import * as Progress from "react-native-progress";
import LottieView from "lottie-react-native";

import colors from "../config/colors";

export default function UploadScreen({
  visable = false,
  progressValue = 0,
  onAnimationFinish,
}) {
  return (
    <Modal visible={visable}>
      <View style={styles.container}>
        {progressValue < 1 ? (
          <Progress.Bar
            progress={progressValue}
            width={200}
            color={colors.primary}
          />
        ) : (
          <LottieView
            source={require("../assets/animations/done.json")}
            style={styles.animation}
            autoPlay
            loop={false}
            onAnimationFinish={onAnimationFinish}
          />
        )}
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  animation: {
    width: "25%",
  },
});
