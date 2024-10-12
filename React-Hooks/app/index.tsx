import { Text, View, Pressable } from "react-native";
import React, { useState, useEffect } from "react";

export default function Index() {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState("green");
  useEffect(() => {
    count >= 0 ? setColor((c) => (c = "green")) : setColor((c) => (c = "red"));
  }, [count]);

  function addCount() {
    setCount((c) => c + 1);
  }
  function changeColor() {
    setColor((c) => (c === "green" ? "red" : "green"));
  }
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: color,
      }}
    >
      <Text>Edit app/index.tsx to edit this screen.</Text>
      <Text>count:{count}</Text>
      <Pressable onPress={addCount}>
        <Text>Add</Text>
      </Pressable>
      <Pressable onPress={() => setCount((c) => c - 1)}>
        <Text>SubsStract</Text>
      </Pressable>

      <Pressable onPress={changeColor}>
        <Text>Change Color</Text>
      </Pressable>
    </View>
  );
}
