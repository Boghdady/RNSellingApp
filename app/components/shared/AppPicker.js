import { MaterialCommunityIcons } from "@expo/vector-icons";
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Modal,
  SafeAreaView,
  Button,
  FlatList,
} from "react-native";
import colors from "../../config/colors";
import AppText from "../../shared/AppText";
import AppTextInput from "./AppTextInput";
import ItemSeparator from "../ItemSeparator";
import PickerItem from "../PickerItem";
import defaultStyle from "../../config/styles";

export default function AppPicker({
  iconName,
  placeholder,
  modalItems,
  selectedItem,
  onSelectedItem,
  PickerItemComponent = PickerItem,
  numberOfColumns = 1,
  width = "100%",
}) {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <TouchableOpacity onPress={() => setShowModal(true)}>
        <View style={[styles.container, { width }]}>
          {iconName && (
            <MaterialCommunityIcons
              style={styles.icon}
              name={iconName}
              size={24}
              color={defaultStyle.colors.mediumGray}
            />
          )}
          {selectedItem ? (
            <AppText style={styles.text}>{selectedItem.label}</AppText>
          ) : (
            <AppText style={styles.placeholder}>{placeholder}</AppText>
          )}

          <MaterialCommunityIcons
            style={styles.icon}
            name="chevron-down"
            size={24}
            color={defaultStyle.colors.mediumGray}
          />
        </View>
      </TouchableOpacity>

      <Modal visible={showModal} animationType="slide">
        <SafeAreaView style={{ backgroundColor: colors.lightGray, flex: 1 }}>
          <Button title="close" onPress={() => setShowModal(false)} />
          <FlatList
            data={modalItems}
            keyExtractor={(item) => item.value.toString()}
            numColumns={numberOfColumns}
            renderItem={({ item }) => (
              <PickerItemComponent
                item={item}
                onPress={() => {
                  setShowModal(false);
                  onSelectedItem(item);
                }}
              />
            )}
          />
        </SafeAreaView>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 15,
    marginVertical: 10,
    backgroundColor: defaultStyle.colors.white,
    borderRadius: 15,
  },

  icon: {
    marginRight: 5,
  },
  text: {
    flex: 1,
  },
  placeholder: {
    flex: 1,
    color: colors.mediumGray,
  },
});
