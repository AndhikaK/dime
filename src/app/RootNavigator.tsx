import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import AccountManagerScreen from "@/features/account/screens/AccountManagerScreen";

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="AccountManager" component={AccountManagerScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
