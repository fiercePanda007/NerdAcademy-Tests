import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from "react-native";
import Modal from "react-native-modal";

const DropdownModal = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [selectedValue, setSelectedValue] = useState("Select an option");
  const data = ["Option 1", "Option 2", "Option 3"];

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const handleSelect = (value) => {
    setSelectedValue(value);
    toggleModal();
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={toggleModal} style={styles.button}>
        <Text>{selectedValue}</Text>
      </TouchableOpacity>

      <Modal
        isVisible={isModalVisible}
        transparent={true}
        onBackdropPress={toggleModal}
        supportedOrientations={["portrait", "landscape"]}
      >
        <View style={styles.modalContent}>
          <FlatList
            data={data}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() => handleSelect(item)}
                style={styles.item}
              >
                <Text style={styles.itemText}>{item}</Text>
              </TouchableOpacity>
            )}
            keyExtractor={(item) => item}
          />
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  button: {
    padding: 12,
    backgroundColor: "#f0f0f0",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 6,
  },
  modalContent: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 8,
    maxHeight: 300,
  },
  item: {
    padding: 10,
  },
  itemText: {
    fontSize: 16,
  },
});

export default DropdownModal;
