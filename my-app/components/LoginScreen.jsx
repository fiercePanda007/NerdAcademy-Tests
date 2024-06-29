import { View, Text, Image , Colors , TouchableOpacity } from "react-native";
import React from "react";


export default function LoginScreen() {
  return (
    <View>
      <View>
        <Text
          style={{
            fontFamily: "outfit",
            fontSize: 40,
            textAlign: "center",
            paddingTop: 60,
            color: "#FC4100",
          }}
        >
          SwiftLearner.com
        </Text>
      </View>
      <View
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: 50,
        }}
      >
        <Image
          source={require("./../assets/images/image1.webp")}
          style={{
            width: 400,
            borderRadius: 20,
            borderWidth: 8,
            borderColor: "#000",
          }}
        />
      </View>

      <View
        style={{
          backgroundColor: "#fff",
          padding: 20,
        }}
      >
        <Text style={{ fontSize: 40, fontFamily: "outfit" }}>
          Your ultimate
          <Text style={{ color: "#FC4100" }}> Learning Partner</Text>
        </Text>
        <Text
          style={{
            fontSize: 25,
            fontFamily: "outfit",
            textAlign: "center",
            marginTop: 50,
            color: "#8f8f8f",
          }}
        >
          Start Learning Now
        </Text>

        <TouchableOpacity
          style={{
            backgroundColor: "#FC4100",
            marginTop: 50,
            padding: 10,
            borderRadius: 99,
          }}
          onPress={() => navigation.navigate("Login")}
        >
          <Text
            style={{
              fontSize: 25,
              fontFamily: "outfit",
              textAlign: "center",
              color: "#fff",
            }}
          >
            Lets Get Started
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
