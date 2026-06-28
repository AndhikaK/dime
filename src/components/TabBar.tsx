import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { TouchableWithoutFeedback, View } from "react-native";
import { StyleSheet } from "react-native-unistyles";

import { Typography } from "./Typography";

export const TabBar = (props: BottomTabBarProps) => {
  const { state, descriptors, navigation } = props;

  return (
    <View style={[styles.container]}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label = (
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
              ? options.title
              : route.name
        ) as string;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };

        return (
          <TouchableWithoutFeedback
            key={route.key}
            onPress={onPress}
            onLongPress={onLongPress}
          >
            <View style={[styles.itemContainer]}>
              {options.tabBarIcon?.({
                focused: isFocused,
                color: "black",
                size: 14,
              })}

              <Typography
                variant="body-secondary"
                style={[isFocused && styles.labelFocused]}
              >
                {label}
              </Typography>
            </View>
          </TouchableWithoutFeedback>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create((theme, rt) => ({
  container: {
    width: "100%",
    flexDirection: "row",
    backgroundColor: theme.colors["fill-bottom-bar"],
    paddingBottom: rt.insets.bottom,
  },
  itemContainer: {
    flex: 1,
    paddingVertical: 16,
    gap: 4,
    alignItems: "center",
    justifyContent: "center",
    borderTopWidth: 1,
    borderTopColor: theme.colors.border,
  },
  labelFocused: {
    fontWeight: "bold",
  },
}));
