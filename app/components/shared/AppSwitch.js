import React, { useState } from "react";
import { View, Text, Switch } from "react-native";

export default function AppSwitch() {
  const [isNew, setIsNew] = useState(false);
  return <Switch value={isNew} onValueChange={(value) => setIsNew(value)} />;
}
