import * as React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import InitialScreen from "@/features/home/screens/InitialScreen";

import { useAppTheme } from "@/themes/useAppTheme";

import BottomTabNavigator from "./BottomTabNavigator";
import SettingNavigator from "./SettingNavigator";

const Stack = createNativeStackNavigator();

const RootStack = () => {
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
      <Stack.Screen name="Setting" component={SettingNavigator} />
    </Stack.Navigator>
  );
};

export default RootStack;
