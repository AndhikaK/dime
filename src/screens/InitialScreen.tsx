import { useEffect } from "react";
import { ActivityIndicator, View } from "react-native";
import { StyleSheet } from "react-native-unistyles";

import { Typography } from "@/components/Typography";
import { ScreenProps } from "@/navigations/types";

type InitialScreenProps = ScreenProps<"/initial">;

const InitialScreen = ({ navigation }: InitialScreenProps) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace("/main", { screen: "/main/home" });
    }, 3000);
  }, [navigation, navigation.navigate]);

  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" />
      <Typography>Loading...</Typography>
    </View>
  );
};

const styles = StyleSheet.create(() => ({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
}));

export default InitialScreen;
