/** @format */

// navigation/AppTabs.tsx
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import TabOneScreen from ".";
import { SearchScreen } from "./search";
import TabTwoScreen from "./two";

const Tab = createBottomTabNavigator();

const AppTabs = () => {
  return (
    <Tab.Navigator screenOptions={{ header: () => <></> }}>
      <Tab.Screen name="Home" component={TabOneScreen} />
      <Tab.Screen name="Settings" component={TabTwoScreen} />
      <Tab.Screen name="Search" component={SearchScreen} />
    </Tab.Navigator>
  );
};

export default AppTabs;
