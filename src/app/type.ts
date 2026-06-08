import { NavigatorScreenParams } from "@react-navigation/core";

export type RootStackParamList = {
  InitialScreen: undefined;
  HomeTabs: NavigatorScreenParams<DashboardTabParamList>;
  AccountManagerScreen: undefined;
};

export type DashboardTabParamList = {
  AccountManagerTab: undefined;
  SettingTab: undefined;
};
