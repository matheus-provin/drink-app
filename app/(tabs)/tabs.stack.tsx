/** @format */

// navigation/AppStack.tsx
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import AppTabs from "./_layout";

const Stack = createStackNavigator();

const TabsStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='AppTabs' component={AppTabs} />
    </Stack.Navigator>
  );
};

export default TabsStack;
