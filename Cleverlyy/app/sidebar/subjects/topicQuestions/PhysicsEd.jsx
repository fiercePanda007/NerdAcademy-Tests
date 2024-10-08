import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Link } from "expo-router";
const PhysicsEd = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>PhysicsEd Topic question:Opens a PDF editor</Text>
      <Text>Student can select chapters and topics here</Text>
      <TouchableOpacity>
        <Link
          replace
          href={{
            pathname: "sidebar/subjects/enrolledSubjects/PhysicsEd",
          }}
        >
          <Text>Submit</Text>
        </Link>
      </TouchableOpacity>
    </View>
  );
};

export default PhysicsEd;
