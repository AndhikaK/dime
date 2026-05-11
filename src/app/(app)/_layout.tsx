import { Tabs } from "expo-router";
import { View } from "react-native";

export default function AppTabLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => <View className="w-3 h-3 bg-amber-500" />,
        }}
      />
    </Tabs>
  );
}
