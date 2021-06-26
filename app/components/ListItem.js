import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableHighlight,
} from "react-native";
import colors from "../config/colors";
import AppText from "../shared/AppText";

export default function ListItem({
  image,
  IconComponent,
  title,
  subtitle,
  onPress,
}) {
  return (
    <TouchableHighlight onPress={onPress} underlayColor={colors.lightGray}>
      <View style={styles.container}>
        {IconComponent}
        {image && <Image style={styles.image} source={image} />}
        <View style={styles.detailsContainer}>
          <AppText style={styles.title} numberOfLines={1}>
            {title}
          </AppText>
          {subtitle && (
            <AppText style={styles.subtitle} numberOfLines={2}>
              {subtitle}
            </AppText>
          )}
        </View>
        <MaterialCommunityIcons
          name="chevron-right"
          size={24}
          color={colors.mediumGray}
        />
      </View>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
  },
  image: {
    height: 70,
    width: 70,
    borderRadius: 35,
  },
  detailsContainer: {
    flex: 1,
    paddingLeft: 20,
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 16,
    fontWeight: "300",
    color: colors.mediumGray,
  },
});
