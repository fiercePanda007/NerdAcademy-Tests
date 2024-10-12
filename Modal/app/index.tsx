import { View, Text, TouchableOpacity, Modal } from "react-native";
import React, { useState } from "react";

const index = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>index</Text>
      <TouchableOpacity onPress={() => setModalVisible(!isModalVisible)}>
        <Text>Open modal</Text>
      </TouchableOpacity>

      <Modal visible={isModalVisible}>
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text>Modal Text</Text>
          <TouchableOpacity onPress={() => setModalVisible(!isModalVisible)}>
            <Text>Close Modal</Text>
          </TouchableOpacity>
        </View>
      </Modal>  
    </View>
  );
};

export default index;
