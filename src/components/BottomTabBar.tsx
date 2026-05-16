import { Text, TouchableWithoutFeedback, View } from "react-native";

import { BottomTabBarProps } from "@react-navigation/bottom-tabs";

import Animated, { FadeIn, FadeOut } from "react-native-reanimated";

import { cn } from "@/libs/utils";

export function BottomTabBar(props: BottomTabBarProps) {
  const { descriptors, navigation, state, insets } = props;

  return (
    <View
      style={{ paddingBottom: insets.bottom }}
      className="flex flex-row bg-bottom-tabbar border border-bottom-tabbar"
    >
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
            key={index}
            onPress={onPress}
            onLongPress={onLongPress}
          >
            <View className="flex-1 items-center justify-center py-1 pb-2 shadow-2xl overflow-visible">
              <View className={cn("rounded-full overflow-hidden")}>
                {isFocused && (
                  <Animated.View
                    entering={FadeIn}
                    exiting={FadeOut}
                    className={cn("w-full h-full absolute bg-blue-400/30")}
                  />
                )}
                <View className="p-1 px-3">
                  {options?.tabBarIcon
                    ? options?.tabBarIcon({
                        focused: isFocused,
                        color: isFocused ? "#A7ACB2" : "#3E3F44",
                        size: 20,
                      })
                    : null}
                </View>
              </View>

              <Text
                className={cn(
                  "text-bottom-tabbar text-xs",
                  isFocused && "font-bold",
                )}
              >
                {label}
              </Text>
            </View>
          </TouchableWithoutFeedback>
        );
      })}
    </View>
  );
}
