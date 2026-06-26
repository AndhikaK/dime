import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useUnistyles } from "react-native-unistyles";

import { TabBar } from "@/components/TabBar";
import AccountListScreen from "@/screens/AccountListScreen";
import HomeTabScreen from "@/screens/HomeTabScreen";

import { MainTabParamList } from "./types";

const Tabs = createBottomTabNavigator<MainTabParamList>();

const BottomTabNavigator = () => {
  const { theme } = useUnistyles();

  return (
    <Tabs.Navigator
      tabBar={(props) => <TabBar {...props} />}
      screenOptions={{
        headerShown: false,
        sceneStyle: {
          backgroundColor: theme.colors["surface-primary"],
        },
      }}
    >
      <Tabs.Screen
        name="/main/home"
        component={HomeTabScreen}
        options={{
          tabBarLabel: "Home",
        }}
      />
      <Tabs.Screen
        name="/main/account-list"
        component={AccountListScreen}
        options={{
          tabBarLabel: "Accounts",
        }}
      />
    </Tabs.Navigator>
  );
};

export default BottomTabNavigator;
