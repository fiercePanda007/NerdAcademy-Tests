import React from "react";
import { useFonts } from "expo-font";
import { View, StyleSheet } from "react-native";
import SubjectPage from "./../components/Subjectpage";

export default function RootLayout() {
  useFonts({
    outfit: require("./../assets/fonts/Outfit-Regular.ttf"),
    "outfit-medium": require("./../assets/fonts/Outfit-Medium.ttf"),
    "outfit-bold": require("./../assets/fonts/Outfit-Bold.ttf"),
  });

  return (
    <View style={styles.container}>
      <View style={styles.subcontainer}>
        <View style={styles.subcontainerBackground}>
          <SubjectPage />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1e1e1e",
    paddingTop: 80,
    paddingBottom: 0,
  },
  subcontainer: {
    flex: 1,
    backgroundColor: "#111111",
    borderRadius: 10,
  },
  subcontainerBackground:{
    paddingLeft:15,
    paddingRight:15,
  }
});
