/** @format */

import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import { LoginScreen } from "./login.screen";
import { RegisterScreen } from "./register.screen";

export default function AuthStack() {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen component={LoginScreen} name='LoginScreen' />
      <Stack.Screen component={RegisterScreen} name='RegisterScreen' />
    </Stack.Navigator>
  );
}
