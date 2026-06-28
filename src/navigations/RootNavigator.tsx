import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useUnistyles } from "react-native-unistyles";

import AddAccountScreen from "@/screens/AddAccountScreen";
import InitialScreen from "@/screens/InitialScreen";

import BottomTabNavigator from "./BottomNavigator";
import { RootStackParamList } from "./types";

export const Stack = createNativeStackNavigator<RootStackParamList>();

const RootNavigator = () => {
  const { theme } = useUnistyles();

  return (
    <Stack.Navigator
      initialRouteName="/initial"
      screenOptions={{
        headerShown: false,
        contentStyle: {
          backgroundColor: theme.colors["surface-primary"],
        },
        animation: "ios_from_right",
      }}
    >
      <Stack.Screen name="/initial" component={InitialScreen} />
      <Stack.Screen name="/main" component={BottomTabNavigator} />

      <Stack.Group>
        <Stack.Screen name="/accounts/add" component={AddAccountScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
};

type RootStackType = typeof Stack;
declare module "@react-navigation/native" {
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  interface RootNavigator extends RootStackType {}
}

export default RootNavigator;
