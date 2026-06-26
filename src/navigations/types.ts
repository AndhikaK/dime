import { NavigatorScreenParams } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

export type RootStackParamList = {
  "/initial": undefined;
  "/main": NavigatorScreenParams<MainTabParamList>;
};

export type MainTabParamList = {
  "/main/home": undefined;
  "/main/account-list": undefined;
};

export type ScreenProps<T extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, T>;
