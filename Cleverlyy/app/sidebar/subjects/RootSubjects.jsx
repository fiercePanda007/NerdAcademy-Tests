import { View, Text } from "react-native";
import React from "react";

const RootSubjects = () => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        alignContent: "center",
      }}
    >
      <Text>RootSubjects</Text>
      <Text>Select your exam boards???</Text>
      <TouchableOpacity>
        <Text>Selected?</Text>
      </TouchableOpacity>
      <Text>
        This goes to individual Subject Page like Edexel IGCSE physics:Double
        Science
      </Text>
    </View>
  );
};

export default RootSubjects;
