import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

const RootDash = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <TouchableOpacity>
        <Text>WatchVideo</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text>SolvePapers</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text>ViewNotes</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text>MarkingSchemas</Text>
      </TouchableOpacity>
    </View>
  );
};

export default RootDash;
