import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Link } from "expo-router";

const RevisionNotes = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>RevisionNotes: this page goesto subjects/revisionNotes</Text>
      <TouchableOpacity>
        <Link
          href={{
            pathname: "sidebar/subjects/revisionNotes/physicsEd",
          }}
        >
          Select a Year
        </Link>
      </TouchableOpacity>
    </View>
  );
};

export default RevisionNotes;
