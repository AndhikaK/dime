import { useCallback, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { BackHandler } from "react-native";

export const useHardwareBackpress = (onBackPress?: () => void) => {
  const navigation = useNavigation();

  const goBackAction = useCallback(() => {
    if (onBackPress) {
      onBackPress();
    } else {
      if (navigation.canGoBack()) {
        navigation.goBack();
      } else {
        // navigation.navigate("Beranda")
      }
    }
  }, [navigation, onBackPress]);

  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      () => {
        goBackAction();
        return true;
      },
    );

    return () => backHandler.remove();
  }, [goBackAction]);

  return {
    canGoBack: navigation.canGoBack(),
    goBackAction,
  };
};
