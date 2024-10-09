import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import Svg, { Defs, LinearGradient, Rect, Stop } from "react-native-svg";

const GradientBackground = ({ text, height, width, textSize, paddingtop }) => {
  return (
    <View style={{ borderRadius: 30, overflow: "hidden" }}>
      <Svg height={height} width={width}>
        <Defs>
          <LinearGradient id="grad" x1="0" y1="0" x2="1" y2="1">
            <Stop offset="0" stopColor="#FF6B6B" stopOpacity="1" />
            <Stop offset="1" stopColor="#6BCB77" stopOpacity="1" />
          </LinearGradient>
        </Defs>
        {/* Applying rx and ry to give rounded corners */}
        <Rect
          x="5"
          y="0"
          width={width}
          height={height}
          fill="url(#grad)"
          rx="1"
          ry="1" // Set both rx and ry to control the border radius
        />
        <View style={{ alignSelf: "center", paddingTop: paddingtop }}>
          <Text
            style={{ fontSize: textSize, color: "#fff", fontWeight: "bold" }}
          >
            {text}
          </Text>
        </View>
      </Svg>
    </View>
  );
};

export default GradientBackground;
