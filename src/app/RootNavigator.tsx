import * as React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { BottomTabNavigator } from "@/navigation/BottomTabNavigator";

import { InitialScreen } from "@/features/home/screens/InitialScreen";

const Stack = createNativeStackNavigator();

export function RootStack() {
  return (
    <Stack.Navigator
      initialRouteName="InitialScreen"
      screenOptions={{
        headerShown: false,
        contentStyle: {
          backgroundColor: "red",
        },
      }}
    >
      <Stack.Screen name="InitialScreen" component={InitialScreen} />
      <Stack.Screen name="Main" component={BottomTabNavigator} />
    </Stack.Navigator>
  );
}
