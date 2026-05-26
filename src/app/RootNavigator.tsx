import * as React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { BottomTabNavigator } from "@/navigation/BottomTabNavigator";

import { InitialScreen } from "@/features/home/screens/InitialScreen";

import { useAppTheme } from "@/themes/useAppTheme";

const Stack = createNativeStackNavigator();

export function RootStack() {
  const { color } = useAppTheme();

  return (
    <Stack.Navigator
      initialRouteName="InitialScreen"
      screenOptions={{
        headerShown: false,
        contentStyle: {
          backgroundColor: color.surface.primary,
        },
      }}
    >
      <Stack.Screen name="InitialScreen" component={InitialScreen} />
      <Stack.Screen name="Main" component={BottomTabNavigator} />
    </Stack.Navigator>
  );
}
