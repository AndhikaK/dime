import { NavigationContainer } from "@react-navigation/native";
import { RootStack } from "./app/RootNavigator";

export default function App() {
  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  );
}
