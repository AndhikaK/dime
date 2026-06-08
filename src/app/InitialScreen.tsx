import { useEffect } from "react";
import { Text, View } from "react-native";

import { useNavigation } from "@react-navigation/native";

import { SafeAreaView } from "react-native-safe-area-context";

const InitialScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.navigate("AccountManagerScreen");
  }, [navigation]);

  return (
    <SafeAreaView>
      <Text>Initial Screen</Text>
    </SafeAreaView>
  );
};

export default InitialScreen;
