import { View } from "react-native";

import { useSafeAreaInsets } from "react-native-safe-area-context";

import { Typography } from "./Typography";

export type AppBarProps = {
  title?: string;
  headerRight?: React.ReactNode;
};
export function AppBar(props: AppBarProps) {
  const { title, headerRight = null } = props;

  const insets = useSafeAreaInsets();

  return (
    <View style={{ paddingTop: insets.top }}>
      <View className="p-4 py-3 bg-surface flex flex-row items-center justify-between">
        <Typography variant="appbar-title">{title}</Typography>

        {!!headerRight && <View>{headerRight}</View>}
      </View>
    </View>
  );
}
