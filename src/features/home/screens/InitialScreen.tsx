import { useEffect } from "react";
import { ActivityIndicator, View } from "react-native";

import { useNavigation } from "@react-navigation/native";

import "@/global.css";

const InitialScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.navigate("Main", {
      screen: "SettingsTab",
    });
  }, [navigation]);

  return (
    <View className="flex flex-1 items-center justify-center">
      <ActivityIndicator size={40} />
    </View>
  );
};

export default InitialScreen;
