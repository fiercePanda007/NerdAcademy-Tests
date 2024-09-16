import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Animated,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { Link } from "expo-router";

const Sidebar = ({ isVisible, toggleSidebar }) => {
  const [isResourcesOpen, setIsResourcesOpen] = useState(false); // State to track submenu open/close

  const toggleResources = () => {
    setIsResourcesOpen(!isResourcesOpen); // Toggle the state of the submenu
  };

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
      submenu: true, // Marking it as a parent item with submenu
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
    // Other non-submenu items...
  ];

  const submenuItems = [
    {
      id: "yearwise",
      label: "Year-wise",
      icon: "calendar-today",
      path: "resrc/subResrc/YearWise",
    },
    {
      id: "chapterwise",
      label: "Chapter-wise",
      icon: "book-open-variant",
      path: "resrc/subResrc/ChapterWise",
    },
    {
      id: "revisionnotes",
      label: "Revision Notes",
      icon: "notebook-outline",
      path: "resrc/subResrc/RevisionNotes",
    },
  ];

  return (
    <>
      {/* Sidebar Content */}
      <Animated.View
        style={[
          styles.sidebarContainer,
          isVisible ? styles.visible : styles.hidden,
        ]}
      >
        {/* Toggle Button Inside Sidebar */}
        <TouchableOpacity
          style={styles.toggleButtonInside}
          onPress={toggleSidebar} // Close sidebar with this button
        >
          <Icon name="menu" size={24} color="#fff" />
        </TouchableOpacity>

        <ScrollView>
          {menuItems.map((item) => {
            // Handling Resources to expand/collapse its submenu
            if (item.label === "Resources") {
              return (
                <View key={item.id}>
                  <TouchableOpacity
                    style={styles.menuItem}
                    onPress={toggleResources} // Toggle the submenu
                  >
                    <Icon
                      name={item.icon}
                      size={24}
                      color="#fff"
                      style={styles.icon}
                    />

                    <Text style={styles.text}>{item.label}</Text>
                    <Icon
                      name={isResourcesOpen ? "chevron-up" : "chevron-down"} // Arrow icon based on state
                      size={24}
                      color="#fff"
                      style={styles.icon}
                    />
                  </TouchableOpacity>

                  {/* Submenu items for Resources */}
                  {isResourcesOpen && (
                    <View>
                      {submenuItems.map((subItem) => (
                        <TouchableOpacity
                          key={subItem.id}
                          style={styles.submenuItem}
                        >
                          <Link
                            href={{
                              pathname: `sidebar/${subItem.path}`,
                            }}
                          >
                            <Icon
                              name={subItem.icon}
                              size={24}
                              color="#fff"
                              style={{ paddingRight: 20 }}
                            />
                            <Text style={styles.text}>
                              {"   "}
                              {subItem.label}
                            </Text>
                          </Link>
                        </TouchableOpacity>
                      ))}
                    </View>
                  )}
                </View>
              );
            }

            return (
              <TouchableOpacity key={item.id} style={styles.menuItem}>
                <Link
                  href={{
                    pathname: `sidebar/${item.path}`,
                  }}
                >
                  <View style={{ paddingRight: 5, paddingTop: 0 }}>
                    <Icon
                      name={item.icon}
                      size={24}
                      color="#fff"
                      style={styles.icon}
                    />
                  </View>

                  <Text style={styles.text}>{item.label}</Text>
                </Link>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </Animated.View>

      {/* Toggle Sidebar Icon when closed */}
      {!isVisible && (
        <TouchableOpacity
          style={styles.toggleButtonOutside}
          onPress={toggleSidebar} // Open sidebar with this button
        >
          <Icon name="menu" size={24} color="#fff" />
        </TouchableOpacity>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  sidebarContainer: {
    width: 220,
    backgroundColor: "#1c1c1e",
    paddingVertical: 15,
    paddingLeft: 40,
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    zIndex: 10,
    transform: [{ translateX: -250 }],
  },
  visible: {
    transform: [{ translateX: 0 }],
  },
  hidden: {
    transform: [{ translateX: -250 }],
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 12,
  },
  submenuItem: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 8,
    paddingLeft: 30, // Indent submenu items
  },
  text: {
    color: "white",
    fontSize: 16,
    marginLeft: 10,
    paddingTop: 5,
    paddingRight: 10,
  },
  icon: {
    width: 30,
    height: 20,
  },
  toggleButtonInside: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 12,
    marginBottom: 20,
  },
  toggleButtonOutside: {
    position: "absolute",
    top: 20,
    left: 25,
    backgroundColor: "#1c1c1e",
    padding: 10,
    borderRadius: 50,
    zIndex: 20,
  },
});

export default Sidebar;

// import React from "react";
// import {
//   View,
//   Text,
//   TouchableOpacity,
//   ScrollView,
//   StyleSheet,
//   Animated,
// } from "react-native";
// import Icon from "react-native-vector-icons/MaterialCommunityIcons";
// import { Link } from "expo-router";

// const Sidebar = ({ isVisible, toggleSidebar }) => {
//   const menuItems = [
//     {
//       id: "dashboard",
//       label: "Dashboard",
//       icon: "view-dashboard",
//       submenu: false,
//       path: "dashboard/RootDash",
//     },
//     {
//       id: "subjects",
//       label: "Subjects",
//       icon: "book-outline",
//       submenu: false,
//       path: "subjects/RootSubjects",
//     },
//     {
//       id: "resources",
//       label: "Resources",
//       icon: "folder",
//       submenu: false,
//       path: "resrc/rootResrc",
//     },
//     {
//       id: "yearwise",
//       label: "Year-wise",
//       icon: "calendar-today",
//       submenu: true,
//       path: "resrc/subResrc/YearWise",
//     },
//     {
//       id: "chapterwise",
//       label: "Chapter-wise",
//       icon: "book-open-variant",
//       submenu: true,
//       path: "resrc/subResrc/ChapterWise",
//     },
//     {
//       id: "revisionnotes",
//       label: "Revision Notes",
//       icon: "notebook-outline",
//       submenu: true,
//       path: "resrc/subResrc/RevisionNotes",
//     },
// {
//   id: "progress",
//   label: "Progress",
//   icon: "chart-line",
//   submenu: false,
//   path: "progress/rootProgress",
// },
// {
//   id: "notes",
//   label: "Notes",
//   icon: "notebook",
//   submenu: false,
//   path: "notes/rootNotes",
// },
// {
//   id: "check",
//   label: "AI Check",
//   icon: "robot",
//   submenu: false,
//   path: "aiCheck/rootAiCheck",
// },
// {
//   id: "calendars",
//   label: "Calendars",
//   icon: "calendar-month",
//   submenu: false,
//   path: "calenders/rootCalenders",
// },
// {
//   id: "forum",
//   label: "Forum",
//   icon: "forum",
//   submenu: false,
//   path: "forum/rootForum",
// },
// {
//   id: "tips",
//   label: "Tips & Hints",
//   icon: "lightbulb-on",
//   submenu: false,
//   path: "tipshints/rootTips",
// },
//     // Other menu items...
//   ];

//   return (
//     <>
//       {/* Sidebar Content */}
//       <Animated.View
//         style={[
//           styles.sidebarContainer,
//           isVisible ? styles.visible : styles.hidden,
//         ]}
//       >
//         {/* Toggle Button Inside Sidebar */}
//         <TouchableOpacity
//           style={styles.toggleButtonInside}
//           onPress={toggleSidebar} // Close sidebar with this button
//         >
//           <Icon name="menu" size={24} color="#fff" />
//         </TouchableOpacity>

//         <ScrollView>
//           {menuItems.map((item) => (
//             <TouchableOpacity key={item.id} style={styles.menuItem}>
//               <Link
//                 href={{
//                   pathname: `sidebar/${item.path}`,
//                 }}
//               >
//                 <Icon
//                   name={item.icon}
//                   size={24}
//                   color="#fff"
//                   style={styles.icon}
//                 />
//                 <Text style={styles.text}>{item.label}</Text>
//               </Link>
//             </TouchableOpacity>
//           ))}
//         </ScrollView>
//       </Animated.View>

//       {/* Toggle Sidebar Icon when closed */}
//       {!isVisible && (
//         <TouchableOpacity
//           style={styles.toggleButtonOutside}
//           onPress={toggleSidebar} // Open sidebar with this button
//         >
//           <Icon name="menu" size={24} color="#fff" />
//         </TouchableOpacity>
//       )}
//     </>
//   );
// };

// const styles = StyleSheet.create({
//   sidebarContainer: {
//     width: 220,
//     backgroundColor: "#1c1c1e",
//     paddingVertical: 15,
//     paddingLeft: 40,
//     position: "absolute",
//     top: 0,
//     left: 0,
//     bottom: 0,
//     zIndex: 10,
//     transform: [{ translateX: -250 }],
//   },
//   visible: {
//     transform: [{ translateX: 0 }],
//   },
//   hidden: {
//     transform: [{ translateX: -250 }],
//   },
//   menuItem: {
//     flexDirection: "row",
//     alignItems: "center",
//     marginVertical: 12,
//   },
//   text: {
//     color: "white",
//     fontSize: 16,
//     marginLeft: 10,
//   },
//   icon: {
//     width: 30,
//   },
//   toggleButtonInside: {
//     flexDirection: "row",
//     alignItems: "center",
//     marginVertical: 12,
//     marginBottom: 20,
//   },
//   toggleButtonOutside: {
//     position: "absolute",
//     top: 20,
//     left: 25,
//     backgroundColor: "#1c1c1e",
//     padding: 10,
//     borderRadius: 50,
//     zIndex: 20,
//   },
// });

// export default Sidebar;
