import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MainTabParamList } from "./types";
import { SettingsTab } from "../features/settings/screens/SettingsTab";
import { HomeTab } from "../features/home/screens/HomeTab";

const Tab = createBottomTabNavigator<MainTabParamList>();

export function BottomTabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="HomeTab" component={HomeTab} />
      <Tab.Screen name="SettingsTab" component={SettingsTab} />
    </Tab.Navigator>
  );
}
