import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";

const PlanSelectionScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select the Plan</Text>
      <ScrollView
        contentContainerStyle={styles.scrollViewContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.cardContainer}>
          <PlanCard
            title="12 months"
            price="£120"
            description="£10/month"
            detail="50% of members choose this plan"
            tag="Try 7 days trial for free"
            onPress={() => alert("Selected 12 months plan")}
          />
          <PlanCard
            title="3 months"
            price="£120"
            description="£10/month"
            detail="20% New Year Offer"
            tag="Offer valid till 1st Jan"
            onPress={() => alert("Selected 3 months plan")}
          />
          <PlanCard
            title="1 month"
            price="£120"
            description="£10/month"
            detail=""
            onPress={() => alert("Selected 1 month plan")}
          />
        </View>
      </ScrollView>
    </View>
  );
};

const PlanCard = ({ title, price, description, detail, tag, onPress }) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      {tag && <Text style={styles.tag}>{tag}</Text>}
      <Text style={styles.planTitle}>{title}</Text>
      <Text style={styles.price}>{price}</Text>
      <Text style={styles.description}>{description}</Text>
      <Text style={styles.detail}>{detail}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
    padding: 20,
  },
  title: {
    color: "#263eff",
    fontSize: 30,
    marginTop: 10,
    marginBottom: 20,
    textAlign: "center",
  },
  scrollViewContent: {
    flexGrow: 1,
    justifyContent: "center",
  },
  cardContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  card: {
    backgroundColor: "#333",
    padding: 20,
    margin: 10,
    alignItems: "center",
    borderRadius: 10,
    minWidth: 200,
    flexBasis: "45%", // Adjust based on your needs
  },
  tag: {
    backgroundColor: "#263eff",
    color: "white",
    padding: 5,
    borderRadius: 5,
    marginBottom: 10,
  },
  planTitle: {
    fontSize: 18,
    color: "white",
    fontWeight: "bold",
    marginBottom: 5,
  },
  price: {
    color: "#aaa",
    marginBottom: 5,
  },
  description: {
    color: "white",
    marginBottom: 10,
    textAlign: "center",
  },
  detail: {
    color: "#aaa",
    fontSize: 12,
    textAlign: "center",
  },
});

export default PlanSelectionScreen;
