import { PropsWithChildren } from "react";
import { View } from "react-native";

import { useNavigation } from "@react-navigation/native";

import { AppBar, AppBarProps } from "./AppBar";

export type ViewScreenProps = {
  appbarProps?: AppBarProps;
} & PropsWithChildren;
export function ViewScreen({ appbarProps, children }: ViewScreenProps) {
  const navigation = useNavigation();

  const handleOnback = () => {
    if (navigation.canGoBack()) {
      navigation.goBack();
    }
  };

  return (
    <View className="bg-surface flex flex-1">
      {appbarProps && <AppBar onBack={handleOnback} {...appbarProps} />}
      {children}
    </View>
  );
}
