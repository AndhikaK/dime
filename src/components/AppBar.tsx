import { TouchableOpacity, View } from "react-native";

import { useSafeAreaInsets } from "react-native-safe-area-context";

import { Typography } from "./Typography";

export type AppBarProps = {
  title?: string;
  headerRight?: React.ReactNode;
  onBack?: () => void;
};
export function AppBar(props: AppBarProps) {
  const { title, onBack, headerRight = null } = props;

  const insets = useSafeAreaInsets();

  return (
    <View style={{ paddingTop: insets.top }} className="shadow-md">
      <View className="p-4 py-3 bg-surface flex flex-row items-center justify-between">
        <TouchableOpacity onPress={onBack}>
          <Typography variant="caption">Back</Typography>
        </TouchableOpacity>

        <Typography variant="appbar-title">{title}</Typography>

        {!!headerRight && <View>{headerRight}</View>}
      </View>
    </View>
  );
}
