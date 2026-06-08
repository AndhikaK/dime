import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import AccountManagerScreen from "@/features/account/screens/AccountManagerScreen";
import SettingScreen from "@/features/settings/screens/SettingScreen";

import { DashboardTabParamList } from "./type";

const Tab = createBottomTabNavigator<DashboardTabParamList>();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="AccountManagerTab" component={AccountManagerScreen} />
      <Tab.Screen name="SettingTab" component={SettingScreen} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
