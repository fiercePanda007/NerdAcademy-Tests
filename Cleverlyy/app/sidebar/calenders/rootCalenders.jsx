import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import Svg, { Defs, LinearGradient, Rect, Stop } from "react-native-svg";

const GradientBackground = () => {
  const text = "Hello There";
  const height = 300;
  const width = 300;
  const paddingtop = width * 0.45;
  return (
    <View style={{ borderWidth: 2, backgroundColor: "red" }}>
      <Svg height={height} width={width}>
        <Defs>
          <LinearGradient id="grad" x1="0" y1="0" x2="1" y2="1">
            <Stop offset="0" stopColor="#FF6B6B" stopOpacity="1" />
            <Stop offset="1" stopColor="#6BCB77" stopOpacity="1" />
          </LinearGradient>
        </Defs>
        <Rect x="0" y="0" width={width} height={height} fill="url(#grad)" />
        <View style={{ alignSelf: "center", paddingTop: paddingtop }}>
          <Text style={styles.text}>{text}</Text>
        </View>
      </Svg>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 24,
    color: "#fff",
    fontWeight: "bold",
  },
});

export default GradientBackground;
