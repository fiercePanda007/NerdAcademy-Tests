import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

const PlanSelectionScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select the Plan</Text>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={styles.carousel}>
        <PlanCard
          title="12 months"
          price="£120"
          description="£10/month"
          detail="50% of members choose this plan"
          tag="Try 7 days trial for free"
        />
        <PlanCard
          title="3 months"
          price="£120"
          description="£10/month"
          detail="20% New Year Offer"
          tag="Offer valid till 1st Jan"
        />
        <PlanCard
          title="1 month"
          price="£120"
          description="£10/month"
          detail=""
        />
      </ScrollView>
    </View>
  );
};

const PlanCard = ({ title, price, description, detail, tag }) => {
  return (
    <View style={styles.card}>
      {tag && <Text style={styles.tag}>{tag}</Text>}
      <Text style={styles.planTitle}>{title}</Text>
      <Text style={styles.price}>{price}</Text>
      <Text style={styles.description}>{description}</Text>
      <Text style={styles.detail}>{detail}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    color: 'white',
    fontSize: 24,
    marginBottom: 20,
  },
  carousel: {
    flexDirection: 'row',
  },
  card: {
    backgroundColor: '#333',
    padding: 20,
    marginHorizontal: 10,
    alignItems: 'center',
    borderRadius: 10,
    minWidth: 200,
  },
  tag: {
    backgroundColor: 'green',
    color: 'white',
    padding: 5,
    borderRadius: 5,
    marginBottom: 10,
  },
  planTitle: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
    marginBottom: 5,
  },
  price: {
    color: '#aaa',
    marginBottom: 5,
  },
  description: {
    color: 'white',
    marginBottom: 10,
  },
  detail: {
    color: '#aaa',
    fontSize: 12,
  },
});

export default PlanSelectionScreen;

