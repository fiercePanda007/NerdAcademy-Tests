  import { View, Text } from 'react-native'
  import React from 'react'
  import { Tabs } from "expo-router";


  const _layout = () => {
    return (
      <Tabs >
        <Tabs.Screen name="SelectCountry" />

        <Tabs.Screen name="SelectExam" />

        <Tabs.Screen name="SelectYearGroup" />

        <Tabs.Screen name="SelectSubject" />

        <Tabs.Screen name="PlanSelectionScreen" />
      </Tabs>
    );
  }

  export default _layout