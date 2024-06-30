import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import * as Progress from "react-native-progress";
import Svg, { Path } from "react-native-svg";
import { SimpleLineIcons } from "@expo/vector-icons";






export default function subjectPage() {
  return (
    <View>
      <View>
        <Text style={styles.textHead}>My Subjects</Text>
      </View>

      <View>
        <View style={styles.card}>
          <View>
            <SimpleLineIcons name="chemistry" size={80} color="#0096FF" />
            <Text style={styles.textRegular}>Revision Notes</Text>
            <Text style={styles.textRegular}>Topic Question</Text>
          </View>
          <View>
            <Text
              style={{
                fontFamily: "Outfit-medium",
                fontSize: 25,
                color: "#989898",
              }}
            >
              Chemistry:Double Science
            </Text>
            <Text
              style={{
                fontFamily: "Outfit",
                fontSize: 23,
                color: "#989898",
                paddingLeft: 187,
                paddingTop: 8,
              }}
            >
              IGCSE
            </Text>
            <Text
              style={{
                fontFamily: "Outfit",
                fontSize: 23,
                color: "#989898",
                paddingLeft: 175,
                paddingTop: 8,
              }}
            >
              Edexcel
            </Text>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <Progress.Bar
                progress={1}
                width={180}
                height={15}
                color="green"
                style={{
                  marginTop: 20,
                }}
              ></Progress.Bar>
              <Text
                style={{
                  fontFamily: "Outfit",
                  fontSize: 20,
                  color: "#989898",
                  marginTop: 17,
                }}
              >
                100%
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <Progress.Bar
                progress={0.5}
                width={180}
                height={15}
                color="#0096FF"
                style={{
                  marginTop:28,
                }}
              ></Progress.Bar>
              <Text
                style={{
                  fontFamily: "Outfit",
                  fontSize: 20,
                  color: "#989898",
                  marginTop: 25,
                }}
              >
                50%
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}





const styles = StyleSheet.create({
  textHead: {
    fontFamily: "Outfit",
    fontSize: 40,
    color: "white",
  },
  textRegular: {
    fontFamily: "Outfit",
    fontSize: 23,
    color: "#989898",
    paddingTop: 22,
  },
  card: {
    backgroundColor: "#000000",
    marginTop: 10,
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    borderWidth: 0.2,
    borderColor: "#0096FF",
    borderRadius: 5,
    shadowColor: "#0096FF",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
  },
});
