import React, { useState, useRef } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  Animated,
  StyleSheet,
} from "react-native";

const options = ["A Level", "AS", "AP", "IGCSE"];

export default function Index() {
  const [selectedLabel, setSelectedLabel] = useState("A Level");
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const animation = useRef(new Animated.Value(0)).current;

  const toggleDropdown = () => {
    console.log("Toggle Dropdown");
    setDropdownVisible(!dropdownVisible);
    Animated.timing(animation, {
      toValue: dropdownVisible ? 0 : 1,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  const selectOption = (option) => {
    console.log("Selected Option:", option);
    setSelectedLabel(option);
    toggleDropdown();
  };

  const dropdownScaleY = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1],
    extrapolate: "clamp",
  });

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={toggleDropdown}>
        <Text>{selectedLabel}</Text>
      </TouchableOpacity>
      {dropdownVisible && (
        <Animated.View
          style={[styles.dropdown, { transform: [{ scaleY: dropdownScaleY }] }]}
        >
          {options.map(
            (option, index) =>
              option !== selectedLabel && (
                <TouchableOpacity
                  key={index}
                  onPress={() => selectOption(option)}
                >
                  <Text style={styles.option}>{option}</Text>
                </TouchableOpacity>
              )
          )}
        </Animated.View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  dropdown: {
    overflow: "hidden",
    backgroundColor: "white",
    elevation: 2,
    width: 150,
    position: "absolute",
    top: 40, // Adjust as needed
  },
  option: {
    padding: 10,
    textAlign: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
});
