import { NavigationContainer } from "@react-navigation/native";

import { GestureHandlerRootView } from "react-native-gesture-handler";

import RootStack from "./app/RootNavigator";

export default function App() {
  return (
    <GestureHandlerRootView className="flex flex-1">
      <NavigationContainer>
        <RootStack />
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}
