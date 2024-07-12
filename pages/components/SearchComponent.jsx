import React, { useState } from "react";
import {
  View,
  TextInput,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import { Fontisto } from "@expo/vector-icons";
import { Link } from "expo-router";

const SearchComponent = ({ data, placeholder, next }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredData, setFilteredData] = useState(data);
  const [selectedCountry, setSelectedCountry] = useState(null);

  const handleSearch = (query) => {
    setSearchQuery(query);
    if (query) {
      const newData = data.filter((item) => {
        const itemData = item.toUpperCase();
        const queryData = query.toUpperCase();
        return itemData.indexOf(queryData) > -1;
      });1
      setFilteredData(newData);
    } else {
      setFilteredData(data);
    }
  };

  const handleSelectCountry = (country) => {
    setSelectedCountry(country);
  };

  const toggleCheckbox = (item) => {
    if (selectedCountry === item) {
      setSelectedCountry(null); // Deselect if already selected
    } else {
      setSelectedCountry(item); // Select the country
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
          <TouchableOpacity
            key={index}
            style={[
              styles.itemContainer,
              selectedCountry === item && styles.selectedItemContainer,
            ]}
            onPress={() => toggleCheckbox(item)}
          >
            <Text style={styles.itemText}>{item}</Text>
            {selectedCountry === item && (
              <Fontisto name="checkbox-active" size={24} color="white" />
            )}
          </TouchableOpacity>
        ))}
      </View>
      {selectedCountry && (
        <View style={styles.buttonContainer}>
          <Link href={`pages/${next}`} style={styles.button}>
            Continue
          </Link>
        </View>
      )}
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
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderRadius: 5,
    margin: 5,
    minWidth: "30%",
    justifyContent: "space-between",
  },
  selectedItemContainer: {
    backgroundColor: "#4B9CD3", // Highlight color for selected item
  },
  itemText: {
    fontSize: 26,
    color: "white",
    marginRight: 10,
  },
  buttonContainer: {
    marginTop: 20,
    alignItems: "center",
  },
  button: {
    padding: 10,
    backgroundColor: "#4B9CD3",
    borderRadius: 5,
    color: "white",
    textAlign: "center",
  },
});

export default SearchComponent;
