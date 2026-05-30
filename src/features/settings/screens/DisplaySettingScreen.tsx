import { View } from "react-native";

import { AppIcon } from "@/components/Icon";
import { MenuGroup, MenuGroupProps } from "@/components/MenuGroup";
import { ViewScreen } from "@/components/ViewScreen";
import { useAppTheme } from "@/themes/useAppTheme";

const DisplaySettingScreen = () => {
  const { theme: currentTheme, switchTheme } = useAppTheme();

  const systemSettings: MenuGroupProps["menus"] = [
    {
      icons: (
        <AppIcon
          variant="entypo"
          name="light-up"
          color={currentTheme === "light" ? "yellow" : "grey"}
        />
      ),
      title: "Light Mode",
      actions: currentTheme === "light" && (
        <AppIcon variant="entypo" name="check" color="lightgreenx" />
      ),
      onPress: () => {
        if (currentTheme !== "light") switchTheme("light");
      },
    },
    {
      icons: (
        <AppIcon
          variant="entypo"
          name="moon"
          color={currentTheme === "dark" ? "lightblue" : "grey"}
        />
      ),
      title: "Dark Mode",
      actions: currentTheme === "dark" && (
        <AppIcon variant="entypo" name="check" color="lightgreenx" />
      ),
      onPress: () => {
        if (currentTheme !== "dark") switchTheme("dark");
      },
    },
  ];

  return (
    <ViewScreen
      appbarProps={{
        title: "Display Settings",
      }}
    >
      <View className="flex p-4">
        <MenuGroup menus={systemSettings} />
      </View>
    </ViewScreen>
  );
};

export default DisplaySettingScreen;
