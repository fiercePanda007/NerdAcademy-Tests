import React from "react";
import { View, StyleSheet } from "react-native";
import Svg, { Text, Defs, LinearGradient, Stop } from "react-native-svg";

const GradientText = () => {
  return (
    <View style={styles.container}>
      <Svg height="50" width="150">
        <Defs>
          <LinearGradient id="grad" x1="0" y1="0" x2="1" y2="0">
            <Stop offset="0" stopColor="#fd85f9" stopOpacity="1" />
            <Stop offset="1" stopColor="#772def" stopOpacity="1" />
          </LinearGradient>
        </Defs>
        <Text fill="url(#grad)" fontSize="26" fontWeight="bold" x="0" y="40">
          AI Checking
        </Text>
      </Svg>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default GradientText;
