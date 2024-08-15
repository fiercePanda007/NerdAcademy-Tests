import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  SafeAreaView,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { Link } from "expo-router";
const SimpleSidebar = () => {
  const [isResourcesOpen, setResourcesOpen] = useState(false);

  const menuItems = [
    {
      id: "dashboard",
      label: "Dashboard",
      icon: "view-dashboard",
      submenu: false,
      path: "dashboard/RootDash",
    },
    {
      id: "subjects",
      label: "Subjects",
      icon: "book-outline",
      submenu: false,
      path: "subjects/RootSubjects",
    },
    {
      id: "resources",
      label: "Resources",
      icon: "folder",
      submenu: false,
      path: "resrc/rootResrc",
    },
    {
      id: "yearwise",
      label: "Year-wise",
      icon: "calendar-today",
      submenu: true,
      path: "resrc/subResrc/YearWise",
    },
    {
      id: "chapterwise",
      label: "Chapter-wise",
      icon: "book-open-variant",
      submenu: true,
      path: "resrc/subResrc/ChapterWise",
    },
    {
      id: "revisionnotes",
      label: "Revision Notes",
      icon: "notebook-outline",
      submenu: true,
      path: "resrc/subResrc/RevisionNotes",
    },
    {
      id: "progress",
      label: "Progress",
      icon: "chart-line",
      submenu: false,
      path: "progress/rootProgress",
    },
    {
      id: "notes",
      label: "Notes",
      icon: "notebook",
      submenu: false,
      path: "notes/rootNotes",
    },
    {
      id: "check",
      label: "AI Check",
      icon: "robot",
      submenu: false,
      path: "aiCheck/rootAiCheck",
    },
    {
      id: "calendars",
      label: "Calendars",
      icon: "calendar-month",
      submenu: false,
      path: "calenders/rootCalenders",
    },
    {
      id: "forum",
      label: "Forum",
      icon: "forum",
      submenu: false,
      path: "forum/rootForum",
    },
    {
      id: "tips",
      label: "Tips & Hints",
      icon: "lightbulb-on",
      submenu: false,
      path: "tipshints/rootTips",
    },
  ];

  const toggleResources = () => {
    setResourcesOpen(!isResourcesOpen);
  };

  return (
    <SafeAreaView style={styles.sidebar}>
      <ScrollView style={styles.scrollView}>
        {menuItems.map((item) => {
          if (item.submenu && !isResourcesOpen) {
            return null;
          }

          const itemStyle = item.submenu ? styles.submenuItem : styles.menuItem;

          return (
            <TouchableOpacity
              key={item.id}
              style={itemStyle}
              onPress={() =>
                item.label === "Resources"
                  ? toggleResources()
                  : console.log(`${item.path} clicked`)
              }
            >
              <Link
                href={{
                  pathname: `sidebar/${item.path}`,
                }}
              >
                <Icon
                  name={item.icon}
                  size={24}
                  color="#fff"
                  style={styles.icon}
                />
                {"  "}
                <Text style={styles.text}>{item.label}</Text>
              </Link>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sidebar: {
    backgroundColor: "#121212",
    width: 200, // Adjust width as necessary
  },
  scrollView: {
    paddingHorizontal: 15,
    paddingVertical: 70,
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  submenuItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    marginLeft: 20,
  },
  text: {
    color: "white",
    fontSize: 16,
    marginLeft: 10,
  },
  icon: {
    width: 30,
  },
});

export default SimpleSidebar;
