import { Text, View } from "react-native";

import { BottomTabHeaderProps } from "@react-navigation/bottom-tabs";
import { getHeaderTitle } from "@react-navigation/elements";
import { NativeStackHeaderProps } from "@react-navigation/native-stack";

import { useSafeAreaInsets } from "react-native-safe-area-context";

export function AppBar(props: NativeStackHeaderProps | BottomTabHeaderProps) {
  const { options, navigation } = props;

  const insets = useSafeAreaInsets();

  return (
    <View style={{ paddingTop: insets.top }} className="flex flex-row">
      <HeaderTitle {...props} />
    </View>
  );
}

type HeaderTitleProps = NativeStackHeaderProps | BottomTabHeaderProps;
function HeaderTitle(props: HeaderTitleProps) {
  const { options, route } = props;

  const title = getHeaderTitle(
    { headerTitle: options.headerTitle, title: options.title },
    route.name,
  );

  if (typeof title === "string") {
    return <Text>{title}</Text>;
  }

  return title;
}
