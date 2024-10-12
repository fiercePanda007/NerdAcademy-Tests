import { View, Text } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";

const Userpage = () => {
  const {id}=useLocalSearchParams();

  return (
    <View>
      <Text>Userpage - {id}</Text>
    </View>
  );
};

export default Userpage;
