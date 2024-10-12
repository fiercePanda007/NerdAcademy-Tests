import { View, Text } from "react-native";
import React from "react";
import { Link } from "expo-router";

const index = () => {
  return (
    <View>
      <Text>Open Second Page</Text>
      <Link
        href={{
          pathname: "./modal/secondpage",
        }}
      >
        <Text>Click me</Text>
      </Link>
    </View>
  );
};

export default index;
