import { NavigatorScreenParams } from "@react-navigation/native";

export type RootStackParamList = {
  "/main": NavigatorScreenParams<MainTabParamList>;
};

export type MainTabParamList = {
  "/main/home": undefined;
};
