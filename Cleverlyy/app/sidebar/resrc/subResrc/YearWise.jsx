import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Link } from "expo-router";

const YearWise = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>yearWise: this page goes to subject/pastPaper</Text>
      <TouchableOpacity>
        <Link
          href={{
            pathname: "sidebar/subjects/pastPapers/rootPastPapers",
          }}
        >
          Select a Year
        </Link>
      </TouchableOpacity>
    </View>
  );
};

export default YearWise;
