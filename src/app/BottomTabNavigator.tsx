import { View } from "react-native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { AccountsTab } from "@/features/account/screens/ListAccountTab";
import { HomeTab } from "@/features/home/screens/HomeTab";
import { StatisticTab } from "@/features/home/screens/StatisticTab";
import { SettingsTab } from "@/features/settings/screens/SettingsTab";

import { BottomTabBar } from "@/components/BottomTabBar";
import { cn } from "@/libs/utils";
import { useAppTheme } from "@/themes/useAppTheme";

import { MainTabParamList } from "./types";

const Tab = createBottomTabNavigator<MainTabParamList>();

export function BottomTabNavigator() {
  const { color } = useAppTheme();

  return (
    <Tab.Navigator
      tabBar={(props) => <BottomTabBar {...props} />}
      screenOptions={{
        headerShown: false,
        sceneStyle: {
          backgroundColor: color.surface.primary,
        },
      }}
    >
      <Tab.Screen
        name="SettingsTab"
        component={SettingsTab}
        options={{
          title: "Settings",
          tabBarIcon: ({ focused }) => (
            <View
              className={cn(
                "w-6 h-6 rounded-full",
                focused ? "bg-blue-500" : "bg-[#A7ACB2]",
              )}
            />
          ),
        }}
      />
      <Tab.Screen
        name="HomeTab"
        component={HomeTab}
        options={{
          title: "Home",
          tabBarIcon: ({ focused }) => (
            <View
              className={cn(
                "w-6 h-6 rounded-full",
                focused ? "bg-blue-500" : "bg-[#A7ACB2]",
              )}
            />
          ),
        }}
      />
      <Tab.Screen
        name="StatisticTab"
        component={StatisticTab}
        options={{
          title: "Stats",
          tabBarIcon: ({ focused }) => (
            <View
              className={cn(
                "w-6 h-6 rounded-full",
                focused ? "bg-blue-500" : "bg-[#A7ACB2]",
              )}
            />
          ),
        }}
      />
      <Tab.Screen
        name="AccountsTab"
        component={AccountsTab}
        options={{
          title: "Accounts",
          tabBarIcon: ({ focused }) => (
            <View
              className={cn(
                "w-6 h-6 rounded-full",
                focused ? "bg-blue-500" : "bg-[#A7ACB2]",
              )}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
