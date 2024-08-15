import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Link } from "expo-router";
const rootPastPapers = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Past Paper</Text>
      <Text>Opens a PDF editor to solve and check</Text>
    </View>
  );
};

export default rootPastPapers;
