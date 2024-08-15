import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Link } from "expo-router";
const RootSubjects = () => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text>RootSubjects</Text>
      <Text>Select your exam boards???</Text>
      <TouchableOpacity>
        <Link
          href={{
            pathname: "sidebar/subjects/enrolledSubjects/PhysicsEd",
          }}
        >
          <Text>Selected?</Text>
        </Link>
      </TouchableOpacity>
      <Text>
        This goes to individual Subject Page like Edexel IGCSE physics:Double
        Science
      </Text>
    </View>
  );
};

export default RootSubjects;
