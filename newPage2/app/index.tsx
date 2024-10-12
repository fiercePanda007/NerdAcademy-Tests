import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const ExamBoardSelection = () => {
  const boards = [
    { level: "IGCSE", subjects: ["Chemistry", "Physics", "Biology", "Maths"] },
    {
      level: "A Level",
      subjects: ["Maths", "Further Maths", "Business", "Physics"],
    },
    { level: "Pre U", subjects: ["Biology", "Maths", "Chemistry", "Business"] },
  ];

  const renderSubjects = (subjects) => {
    return subjects.map((subject, index) => (
      <View key={index} style={styles.subjectContainer}>
        <Icon name="flask-outline" size={wp("6%")} color="#FFF" />
        <Text style={styles.subjectText}>{subject}</Text>
      </View>
    ));
  };

  const renderBoards = () => {
    return boards.map((board, index) => (
      <View key={index} style={styles.boardContainer}>
        <Text style={styles.boardText}>{board.level}</Text>
        <View style={styles.subjectList}>{renderSubjects(board.subjects)}</View>
      </View>
    ));
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.headerText}>Select Exam Board</Text>
      {renderBoards()}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1C1C1C",
    padding: wp("5%"),
  },
  headerText: {
    fontSize: wp("6%"),
    fontWeight: "bold",
    color: "#FFF",
    marginBottom: hp("3%"),
  },
  boardContainer: {
    marginBottom: hp("3%"),
  },
  boardText: {
    fontSize: wp("5%"),
    color: "#FFF",
    marginBottom: hp("2%"),
  },
  subjectContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: hp("1.5%"),
    backgroundColor: "#333333",
    padding: wp("3%"),
    borderRadius: 10,
  },
  subjectText: {
    fontSize: wp("4.5%"),
    color: "#FFF",
    marginLeft: wp("2%"),
  },
  subjectList: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
});

export default ExamBoardSelection;
