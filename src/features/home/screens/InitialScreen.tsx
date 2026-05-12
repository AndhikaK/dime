import { useEffect } from "react";
import { ActivityIndicator, View } from "react-native";

import { useNavigation } from "@react-navigation/native";

import "@/global.css";

export function InitialScreen() {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.navigate("Main", {
      screen: "HomeTab",
    });
  }, [navigation]);

  return (
    <View className="flex flex-1 items-center justify-center">
      <ActivityIndicator size={40} />
    </View>
  );
}
