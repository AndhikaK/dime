import { NavigatorScreenParams } from "@react-navigation/native";

export type RootStackParamList = {
  InitialScreen: undefined;
  Main: NavigatorScreenParams<MainTabParamList>;
  Setting: NavigatorScreenParams<SettingNavigatorParamlist>;
};

export type MainTabParamList = {
  HomeTab: undefined;
  SettingsTab: undefined;
  AccountsTab: undefined;
  StatisticTab: undefined;
};

export type SettingNavigatorParamlist = {
  DisplaySettingScreen: undefined;
};

declare global {
  namespace ReactNavigation {
    // eslint-disable-next-line @typescript-eslint/no-empty-object-type
    interface RootParamList extends RootStackParamList {}
  }
}
