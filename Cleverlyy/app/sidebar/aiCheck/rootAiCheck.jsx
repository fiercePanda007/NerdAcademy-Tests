import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from "react-native";
import RNPickerSelect from "react-native-picker-select";
import Header from "./../../../components/Header";
import { Link } from "expo-router";
import Sidebar from "./../../../components/SimpleSidebar";
import AntDesign from "@expo/vector-icons/AntDesign";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import Entypo from "@expo/vector-icons/Entypo";

const AICheckingScreen = () => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  const [year, setYear] = useState(null);
  const [session, setSession] = useState(null);
  const [variant, setVariant] = useState(null);
  const [paper, setPaper] = useState(null);
  const [retrievePaper, setRetrievePaper] = useState(false); //

  const levels = ["O Level", "A level"];
  const boards = ["CIE", "EdExcel"];
  const [selectedLevel, setSelectedLevel] = useState("O Level");
  const [selectedBoard, setSelectedBoard] = useState("CIE");

  const yearOptions = [
    { label: "2023", value: "2023" },
    { label: "2022", value: "2022" },
  ];
  const OLevelSubjectsEdExcel = [
    "English Language",
    "Mathematics",
    "Biology",
    "Chemistry",
    "Physics",
    "Geography",
    "History",
    "Business Studies",
  ];

  const OLevelSubjectsCIE = [
    "First Language English",
    "Mathematics",
    "Biology",
    "Chemistry",
    "Physics",
    "Geography",
    "History",
    "Literature in English",
  ];

  const ALevelSubjectsEdExcel = [
    "Mathematics",
    "Further Mathematics",
    "Physics",
    "Chemistry",
    "Biology",
    "English Literature",
    "History",
    "Geography",
  ];

  const ALevelSubjectsCIE = [
    "Mathematics",
    "Physics",
    "Chemistry",
    "Biology",
    "English Language",
    "English Literature",
    "Economics",
    "Geography",
  ];

  const [selectedSubject, setSelectedSubject] = useState(null);

  const sessionOptions = [
    { label: "Jan/Feb", value: "jan_feb" },
    { label: "May/June", value: "may_june" },
  ];

  const variantOptions = [
    { label: "Variant 1", value: "variant_1" },
    { label: "Variant 2", value: "variant_2" },
  ];

  const paperOptions = [
    { label: "Paper 1", value: "paper_1" },
    { label: "Paper 2", value: "paper_2" },
  ];

  const retrievedPaper = [
    "retrievedPaper1",
    "retrievedPaper2",
    "retrievedPaper3",
  ];

  let queryArray;
  {
    if (selectedLevel === "O Level") {
      queryArray =
        selectedBoard === "CIE" ? OLevelSubjectsCIE : OLevelSubjectsEdExcel;
    } else {
      queryArray =
        selectedBoard === "CIE" ? ALevelSubjectsCIE : ALevelSubjectsEdExcel;
    }
  }

  return (
    <View style={styles.container}>
      <Header link="./../../settings/RootSettings" />

      <Sidebar isVisible={isSidebarVisible} toggleSidebar={toggleSidebar} />

      <SafeAreaView>
        <View style={{ paddingBottom: 30 }}>
          <Text style={styles.heading}>AI Checking</Text>
          <View style={{ flexDirection: "row" }}>
            <AntDesign name="checkcircleo" size={40} color="#8878f9" />
            <Text style={styles.description}>
              <Text style={{ fontWeight: "bold" }}>
                Don't waste time manually checking your papers
              </Text>
              . Solve and then check using our AI or directly upload solved
              papers and let our AI{"\n"}
              technology do the heavy lifting, while you focus on solving more
              papers and improving your grades.
            </Text>
          </View>
        </View>

        <ScrollView stickyHeaderHiddenOnScroll style={{ marginBottom: 200 }}>
          <View style={{ paddingLeft: 10, paddingRight: 10 }}>
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <View style={{ flex: 1, flexDirection: "row" }}>
                {levels.map((level, index) => (
                  <TouchableOpacity
                    key={index}
                    style={[
                      styles.levelButton,
                      selectedLevel === level && styles.selectedButton,
                    ]}
                    onPress={() => {
                      setSelectedLevel(level);
                    }}
                  >
                    <Text
                      style={[
                        styles.toggleButtonText,
                        selectedLevel === level && styles.selectedText,
                      ]}
                    >
                      {level}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>

              <View
                style={{
                  flex: 1,
                  flexDirection: "row",
                  justifyContent: "flex-end",
                }}
              >
                {boards.map((board, index) => (
                  <TouchableOpacity
                    key={index}
                    style={[
                      styles.levelButton,
                      selectedBoard === board && styles.selectedButton,
                    ]}
                    onPress={() => {
                      setSelectedBoard(board);
                    }}
                  >
                    <Text
                      style={[
                        styles.toggleButtonText,
                        selectedBoard === board && styles.selectedText,
                      ]}
                    >
                      {board}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>

            <View>
              <View style={styles.yourSubjectContainer}>
                <Text style={styles.yourSubjectText}>Your Subjects</Text>
              </View>

              <View style={styles.subjectsContainer}>
                {queryArray.map((subject, index) => (
                  <TouchableOpacity
                    key={index}
                    onPress={() => {
                      setSelectedSubject(subject);
                    }}
                    style={[
                      styles.touchableSubjects,
                      selectedSubject === subject && styles.selectedSubject,
                    ]}
                  >
                    <Text style={[styles.subject]}>{subject}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>
            <View
              style={{
                borderBottomColor: "#000",
                borderBottomWidth: 1,
                width: "100%",
              }}
            ></View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                marginTop: 20,
              }}
            >
              <Text style={styles.paperLabel}>Which Paper are you Solving</Text>
            </View>
            <View style={styles.dropdownContainer}>
              <RNPickerSelect
                onValueChange={(value) => {
                  setYear(value);
                  setSession(null);
                  setVariant(null);
                  setPaper(null);
                }}
                items={yearOptions}
                placeholder={{ label: "Select year", value: null }}
                style={pickerSelectStyles}
              />

              <View
                style={{
                  paddingTop: 10,
                  width: 40,
                  paddingLeft: 5,
                  paddingRight: 0,
                }}
              >
                {year && (
                  <AntDesign name="arrowright" size={24} color="black" />
                )}
                {!year && (
                  <AntDesign
                    name="arrowright"
                    size={24}
                    color="rgba(0, 0, 0, 0.3)"
                  />
                )}
              </View>

              <RNPickerSelect
                onValueChange={(value) => {
                  setSession(value);
                  setVariant(null);
                  setPaper(null);
                }}
                items={sessionOptions}
                disabled={!year}
                placeholder={{ label: "Select session", value: null }}
                style={pickerSelectStyles}
              />

              <View style={{ paddingTop: 10, width: 40, paddingLeft: 10 }}>
                {paper && (
                  <AntDesign name="arrowright" size={24} color="black" />
                )}
                {!paper && (
                  <AntDesign
                    name="arrowright"
                    size={24}
                    color="rgba(0, 0, 0, 0.3)"
                  />
                )}
              </View>

              <RNPickerSelect
                onValueChange={(value) => {
                  setVariant(value);
                  setPaper(null);
                }}
                items={variantOptions}
                disabled={!session}
                placeholder={{ label: "Select variant", value: null }}
                style={pickerSelectStyles}
              />

              <View
                style={{
                  paddingTop: 10,
                  width: 40,
                  paddingLeft: 10,
                }}
              >
                {variant && (
                  <AntDesign name="arrowright" size={24} color="black" />
                )}
                {!variant && (
                  <AntDesign
                    name="arrowright"
                    size={24}
                    color="rgba(0, 0, 0, 0.3)"
                  />
                )}
              </View>

              <RNPickerSelect
                onValueChange={(value) => setPaper(value)}
                items={paperOptions}
                disabled={!variant}
                placeholder={{ label: "Select paper", value: null }}
                style={pickerSelectStyles}
              />
              {year && session && variant && paper && (
                <View style={{ paddingLeft: 30, paddingTop: 3 }}>
                  <TouchableOpacity
                    style={{
                      backgroundColor: "#6522eb",
                      borderRadius: 10,
                      padding: 5,
                    }}
                    onPress={() => setRetrievePaper(true)}
                  >
                    <Text
                      style={{
                        marginTop: 3,
                        fontSize: 22,
                        fontWeight: "700",
                        color: "white",
                      }}
                    >
                      Retrieve Paper
                    </Text>
                  </TouchableOpacity>
                </View>
              )}
            </View>
            <View
              style={{
                borderBottomColor: "#000",
                borderBottomWidth: 1,
                width: "100%",
                marginTop: 20,
              }}
            ></View>

            {retrievePaper && (
              <View>
                <View
                  style={{
                    flex: 1,
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <View>
                    {retrievedPaper.map((paper, index) => (
                      <View style={{ flexDirection: "row" }}>
                        <View style={{ paddingTop: 10 }}>
                          <FontAwesome6
                            name="paperclip"
                            size={24}
                            color="black"
                          />
                        </View>
                        <Text key={index} style={{ fontSize: 24, padding: 10 }}>
                          {paper}
                        </Text>
                      </View>
                    ))}
                  </View>
                  <View
                    style={{
                      flexDirection: "Column",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <TouchableOpacity
                      style={{
                        backgroundColor: "#6522eb",
                        borderRadius: 10,
                        padding: 5,
                      }}
                    >
                      <Text style={{ fontSize: 22, color: "white" }}>
                        Solve
                      </Text>
                    </TouchableOpacity>
                    <Text>
                      {"              "}And{"\n"} Then Check Using AI
                    </Text>
                  </View>
                </View>
                <View style={{ flexDirection: "row", marginTop: 5 }}>
                  <View
                    style={{
                      borderTopColor: "#000",
                      borderTopWidth: 1,
                      width: "48.5%",
                    }}
                  ></View>
                  <View
                    style={{ paddingLeft: 10, paddingRight: 10, marginTop: 10 }}
                  >
                    <Text style={{ fontWeight: "700" }}>OR</Text>
                  </View>
                  <View
                    style={{
                      borderBottomColor: "#000",
                      borderBottomWidth: 1,
                      width: "48.5%",
                    }}
                  ></View>
                </View>
                <View
                  style={{
                    flex: 1,
                    flexDirection: "row",
                    justifyContent: "space-between",
                    paddingTop: 30,
                    paddingBottom: 30,
                  }}
                >
                  <View>
                    <View style={{ flexDirection: "row" }}>
                      <Entypo name="dot-single" size={24} color="black" />
                      <Text style={{ paddingTop: 5 }}>
                        Only PDF is Accepted
                      </Text>
                    </View>
                    <View style={{ flexDirection: "row" }}>
                      <Entypo name="dot-single" size={24} color="black" />
                      <Text style={{ paddingTop: 5 }}>
                        Make sure the full document is uploaded
                      </Text>
                    </View>
                    <View style={{ flexDirection: "row" }}>
                      <Entypo name="dot-single" size={24} color="black" />
                      <Text style={{ paddingTop: 5 }}>
                        Make sure the writings are visible & clear as our AI
                        {"\n"} relies on OCR technology.
                      </Text>
                    </View>
                  </View>
                  <View>
                    <TouchableOpacity
                      style={{
                        backgroundColor: "#6522eb",
                        borderRadius: 10,
                        padding: 20,
                      }}
                    >
                      <Text style={{ color: "white", fontSize: 30 }}>
                        Upload Solved Papers
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            )}
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f7f7f7",
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    marginTop: 10,
  },
  description: {
    paddingTop: 5,
    paddingLeft: 8,
    fontSize: 15,
    color: "#555",
    marginBottom: 20,
  },
  yourSubjectContainer: {
    flexDirection: "row",
    justifyContent: "center",
    paddingBottom: 20,
  },
  yourSubjectText: {
    fontSize: 24,
  },
  subjectsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginBottom: 20,
    justifyContent: "space-between",
  },
  touchableSubjects: {
    backgroundColor: "#f0f0f0",
    borderRadius: 10,
  },
  subject: {
    fontSize: 16,
    padding: 4,
    margin: 5,
  },
  selectedSubject: {
    backgroundColor: "#d1c4e9",
  },
  dropdownContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start",
    marginVertical: 20,
    width: 200,
  },
  paperLabel: {
    paddingTop: 10,
    fontSize: 22,
    marginBottom: 5,
  },
  levelButton: {
    justifyContent: "center",
    alignItems: "center",
    width: 80,
    height: 30,
    backgroundColor: "#fff",
    color: "white",
    borderRadius: 10,
    marginLeft: 3,
  },
  selectedButton: {
    backgroundColor: "#8878f9",
  },
  toggleButtonText: {
    fontWeight: 500,
  },
  selectedText: {
    fontWeight: 500,
    color: "white",
  },
});

const pickerSelectStyles = {
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    color: "black",
    paddingRight: 0,
    marginBottom: 10,
    width: 130,
  },

  inputAndroid: {
    fontSize: 16,
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderWidth: 0.5,
    borderColor: "#ccc",
    borderRadius: 8,
    color: "black",
    paddingRight: 30, // to ensure the text is never behind the icon
    marginBottom: 10,
  },
};

const pickerSelectStylesSelected = {
  inputAndroid: {
    fontSize: 16,
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderWidth: 0.5,
    borderColor: "black",
    borderRadius: 8,
    color: "black",
    paddingRight: 30, // to ensure the text is never behind the icon
    marginBottom: 10,
  },
  inputIOSselected: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 10,
    color: "black",
    paddingRight: 30,
    marginBottom: 10,
    width: 150,
  },
};

export default AICheckingScreen;
