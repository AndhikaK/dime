import { createNativeStackNavigator } from "@react-navigation/native-stack";

import BottomTabNavigator from "./BottomNavigator";
import { RootStackParamList } from "./types";

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="/main" component={BottomTabNavigator} />
    </Stack.Navigator>
  );
};

export default RootNavigator;
