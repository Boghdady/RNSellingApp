import React from "react";
import LottieView from "lottie-react-native";

export default function ActivityIndicator({ visable }) {
  if (!visable) return null;
  return (
    <LottieView
      source={require("../assets/animations/loading.json")}
      autoPlay
      loop
    />
  );
}
