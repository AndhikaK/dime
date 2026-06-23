import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeTabScreen from "@/screens/HomeTabScreen";

import { MainTabParamList } from "./types";

const Tabs = createBottomTabNavigator<MainTabParamList>();

const BottomTabNavigator = () => {
  return (
    <Tabs.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tabs.Screen name="/main/home" component={HomeTabScreen} />
    </Tabs.Navigator>
  );
};

export default BottomTabNavigator;
