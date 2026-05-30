import { View } from "react-native";

import { useNavigation } from "@react-navigation/native";

import { SafeAreaView } from "react-native-safe-area-context";

import { AppIcon } from "@/components/Icon";
import { MenuGroup, MenuGroupProps } from "@/components/MenuGroup";
import { Typography } from "@/components/Typography";

const SettingsTab = () => {
  const navigation = useNavigation();

  const listMenus: MenuGroupProps["menus"] = [
    {
      icons: <View className="bg-red-50 h-5 w-5" />,
      title: "Display",
      actions: <View className="bg-red-50 h-5 w-5" />,
    },
    {
      icons: <View className="bg-red-50 h-5 w-5" />,
      title: "Display",
      description: "Essentially unbreakable variant",
      actions: <AppIcon variant="fontawesome6" name="chevron-right" />,
      onPress: () => {
        navigation.navigate("Setting", { screen: "DisplaySettingScreen" });
      },
    },
  ];

  return (
    <SafeAreaView>
      <Typography>Settings</Typography>

      <View className="p-4 gap-4">
        <MenuGroup groupTitle="App settings" menus={listMenus} />
        <Typography className="text-center">version 0.0.1</Typography>
      </View>
    </SafeAreaView>
  );
};

export default SettingsTab;
