import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  StyleSheet,
  Dimensions,
} from "react-native";

const { width, height } = Dimensions.get("window");

const HomeScreen = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Top section with video and activity log */}
      <View style={styles.topSection}>
        {/* Video Placeholder */}
        <View style={styles.videoContainer}>
          <TouchableOpacity style={styles.playButton}>
            {/* Insert your Play Icon/Image here */}
            <Text>Play</Text>
          </TouchableOpacity>
        </View>

        {/* Activity Log */}
        <View style={styles.activityLog}>
          <Text style={styles.activityLogTitle}>Activity Log</Text>
          <View style={styles.activityItem}>
            <Text style={styles.activityText}>Watch video - Chapter 1</Text>
            <Text style={styles.activityDate}>1st November, 2023</Text>
          </View>
          {/* Repeat activity items as needed */}
        </View>
      </View>

      {/* Middle section with progress, suggestions, and exam dates */}
      <View style={styles.middleSection}>
        <View style={styles.infoBox}>
          <Text style={styles.infoText}>EXAM DATES</Text>
        </View>
        <View style={styles.infoBox}>
          <Text style={styles.infoText}>PROGRESS</Text>
        </View>
        <View style={styles.infoBox}>
          <Text style={styles.infoText}>SUGGESTIONS</Text>
        </View>
      </View>

      {/* Bottom section with actions */}
      <View style={styles.bottomSection}>
        <View style={styles.actionBox}>
          <TouchableOpacity style={styles.actionButton}>
            {/* Insert your Icon/Image here */}
            <Text>Tips</Text>
          </TouchableOpacity>
          <Text style={styles.actionText}>Watch Videos</Text>
        </View>
        <View style={styles.actionBox}>
          <TouchableOpacity style={styles.actionButton}>
            {/* Insert your Icon/Image here */}
            <Text>Notes</Text>
          </TouchableOpacity>
          <Text style={styles.actionText}>Take Notes</Text>
        </View>
        <View style={styles.actionBox}>
          <TouchableOpacity style={styles.actionButton}>
            {/* Insert your Icon/Image here */}
            <Text>Papers</Text>
          </TouchableOpacity>
          <Text style={styles.actionText}>Solve Papers</Text>
        </View>
      </View>

      {/* Start your journey section */}
      <TouchableOpacity style={styles.startJourneyButton}>
        <Text style={styles.startJourneyText}>Start your journey</Text>
      </TouchableOpacity>

      {/* Join community & Submit Problems */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.footerButton}>
          <Text style={styles.footerButtonText}>Join Community</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerButton}>
          <Text style={styles.footerButtonText}>Submit Problems</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.footerText}>Missing something? Tell us</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#181818",
  },
  topSection: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  videoContainer: {
    width: "65%",
    height: 200,
    backgroundColor: "#333",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  playButton: {
    width: 50,
    height: 50,
    backgroundColor: "#555",
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
  },
  activityLog: {
    width: "30%",
    backgroundColor: "#252525",
    padding: 10,
    borderRadius: 10,
  },
  activityLogTitle: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
  },
  activityItem: {
    marginBottom: 10,
  },
  activityText: {
    color: "#CCC",
  },
  activityDate: {
    color: "#777",
    fontSize: 12,
  },
  middleSection: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  infoBox: {
    width: "30%",
    height: 100,
    backgroundColor: "#333",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  infoText: {
    color: "#FFF",
    fontSize: 14,
  },
  bottomSection: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  actionBox: {
    width: "30%",
    alignItems: "center",
  },
  actionButton: {
    width: 60,
    height: 60,
    backgroundColor: "#444",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
    marginBottom: 10,
  },
  actionText: {
    color: "#FFF",
    fontSize: 14,
  },
  startJourneyButton: {
    backgroundColor: "#444",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 20,
  },
  startJourneyText: {
    color: "#FFF",
    fontSize: 16,
  },
  footer: {
    alignItems: "center",
  },
  footerButton: {
    backgroundColor: "#444",
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
  },
  footerButtonText: {
    color: "#FFF",
  },
  footerText: {
    color: "#777",
    textDecorationLine: "underline",
  },
});

export default HomeScreen;
