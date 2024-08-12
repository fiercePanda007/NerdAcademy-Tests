import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

const PhysicsEd = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>physicsEd</Text>
      <TouchableOpacity>
        <Text>Revision Notes</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text>Topic Question</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text>Past Papers</Text>
      </TouchableOpacity>
    </View>
  );
};

export default PhysicsEd;
