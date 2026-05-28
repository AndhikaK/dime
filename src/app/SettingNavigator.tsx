import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { DisplaySettingScreen } from "@/features/settings/screens/DisplaySettingScreen";

import { SettingNavigatorParamlist } from "./types";

const Stack = createNativeStackNavigator<SettingNavigatorParamlist>();

export function SettingNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="DisplaySettingScreen"
        component={DisplaySettingScreen}
      />
    </Stack.Navigator>
  );
}
