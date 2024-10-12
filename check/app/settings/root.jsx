import { View, Text } from "react-native";
import React from "react";
import { Link } from "expo-router";
const root = () => {
  return (
    <View>
      <Text>root</Text>
      <Link href="settings/pages/page1">Go to page 1</Link>
    </View>
  );
};

export default root;
