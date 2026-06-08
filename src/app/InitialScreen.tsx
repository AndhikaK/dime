import { useEffect } from "react";
import { ActivityIndicator, StyleSheet } from "react-native";

import { useNavigation } from "@react-navigation/native";

import { SafeAreaView } from "react-native-safe-area-context";

const InitialScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.navigate("HomeTabs", {
      screen: "AccountManagerTab",
    });
  }, [navigation]);

  return (
    <SafeAreaView style={styles.container}>
      <ActivityIndicator color="blue" size="large" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default InitialScreen;
