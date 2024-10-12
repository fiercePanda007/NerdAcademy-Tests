import { View, Text, Pressable } from "react-native";
import React, { useState } from "react";
import { Link } from "expo-router";

const Index = () => {
  const [toggle, setToggle] = useState("red"); // Initial state set to "red"

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: toggle, // Using the state variable `toggle` here
      }}
    >
      <Text>index</Text>
      <Link href={"settings/RootSettings"}>Go to Root Settings</Link>
      <Pressable onPress={() => setToggle(toggle === "red" ? "white" : "red")}>
        {/* Correct toggle logic */}
        <Text>PressME</Text>
      </Pressable>
    </View>
  );
};

export default Index;
