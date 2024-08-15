import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Link } from "expo-router";
const ChapterWise = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>ChapterWise: this page goes to subjects/topicQuestions</Text>
      <TouchableOpacity>
        <Link
          href={{
            pathname: "sidebar/subjects/topicQuestions/PhysicsEd",
          }}
        >
          Select a Chapter
        </Link>
      </TouchableOpacity>
    </View>
  );
};

export default ChapterWise;
