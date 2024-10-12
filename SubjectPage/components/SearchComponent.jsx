import React, { useState } from "react";
import { View, TextInput, Text, StyleSheet, ScrollView } from "react-native";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import CheckBox from "@react-native-community/checkbox";


const SearchComponent = ({ data,placeholder }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredData, setFilteredData] = useState(data);
  const [checkbox,isCheckbox] = useState(false);

  const handleSearch = (query) => {
    setSearchQuery(query);
    if (query) {
      const newData = data.filter((item) => {
        const itemData = item.toUpperCase();
        const queryData = query.toUpperCase();
        return itemData.indexOf(queryData) > -1;
      });
      setFilteredData(newData);
    } else {
      setFilteredData(data);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.searchBox}>
        <TextInput
          style={styles.input}
          placeholder={placeholder}
          placeholderTextColor="#D1E5F4"
          value={searchQuery}
          onChangeText={handleSearch}
        />
        <EvilIcons name="search" size={24} color="#D1E5F4" />
      </View>
      <View style={styles.list}>
        {filteredData.map((item, index) => (
          <View key={index} style={styles.itemContainer}>
            <Text style={styles.itemText}>{item}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  searchBox: {
    flexDirection: "row",
    alignItems: "center",
    borderColor: "#D1E5F4",
    borderWidth: 1,
    borderRadius: 50,
    padding: 10,
    marginBottom: 15,
  },
  input: {
    flex: 1,
    marginLeft: 10,
    color: "#D1E5F4",
  },
  list: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  itemContainer: {
    padding: 10,
    borderRadius: 5,
    margin: 5,
    minWidth: "30%",
    alignItems: "center",
    justifyContent: "center",
  },
  itemText: {
    fontSize: 26,
    color: "white",
  },
});

export default SearchComponent;
