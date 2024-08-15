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
      <Text>physicsEd</Text>
      <TouchableOpacity>
        <Link
          href={{
            pathname: "sidebar/subjects/revisionNotes/physicsEd",
          }}
        >
          <Text>Revision Notes</Text>
        </Link>
      </TouchableOpacity>
      <TouchableOpacity>
        <Link
          href={{
            pathname: "sidebar/subjects/topicQuestions/PhysicsEd",
          }}
        >
          <Text>Topic Question</Text>
        </Link>
      </TouchableOpacity>
      <TouchableOpacity>
        <Link
          href={{
            pathname: "sidebar/subjects/pastPapers/rootPastPapers",
          }}
        >
          <Text>Past Papers</Text>
        </Link>
      </TouchableOpacity>
    </View>
  );
};

export default PhysicsEd;
