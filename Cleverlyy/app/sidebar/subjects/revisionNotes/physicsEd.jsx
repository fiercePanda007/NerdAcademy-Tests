import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Link } from "expo-router";
const physicsEd = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <TouchableOpacity>
        <Link
          href={{
            href: "sidebar/subjects/revisionNotes/topicWiseRevision/physicsEd",
          }}
        >
          <Text>physicsEd Revision Notes: Opens TopicWise Revision Notes</Text>
        </Link>
      </TouchableOpacity>
    </View>
  );
};

export default physicsEd;
