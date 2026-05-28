import { Fragment, ReactNode } from "react";
import {
  GestureResponderEvent,
  Pressable,
  PressableProps,
  View,
} from "react-native";

import { LinearGradient } from "expo-linear-gradient";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";

import { StyledLinearGradient } from "@/libs/expo-linear-gradient/StyledLinearGradient";
import { cn } from "@/libs/utils";

import { Typography } from "./Typography";

export type MenuGroupProps = {
  groupTitle: string;
  menus: MenuItemProps[];
};
export function MenuGroup({ groupTitle, menus }: MenuGroupProps) {
  return (
    <View className="gap-3">
      {!!groupTitle && <Typography variant="headline">{groupTitle}</Typography>}

      <View className="bg-card rounded-2xl border-card overflow-hidden">
        {menus.map((menu, menuIdx) => (
          <Fragment key={menuIdx}>
            <MenuItem {...menu} />
            <MenuItemSeparator hidden={menuIdx === menus.length - 1} />
          </Fragment>
        ))}
      </View>
    </View>
  );
}

export type MenuItemProps = {
  icons: ReactNode;
  title: string;
  description?: string;
  actions?: ReactNode;
  state?: "active" | "disabled";
} & Omit<PressableProps, "children">;
export function MenuItem({
  icons,
  title,
  description,
  actions,
  onPress,
  onPressIn,
  onLongPress,
  onPressOut,
  ...rest
}: MenuItemProps) {
  const animatedValue = useSharedValue(false);

  const pressGesture = Gesture.LongPress()
    .onBegin(() => {
      animatedValue.value = true;
    })
    .onEnd(() => {
      animatedValue.value = false;
    })
    .onFinalize(() => {
      animatedValue.value = false;
    });

  const animatedScaleStyle = useAnimatedStyle(() => ({
    transform: [
      { scaleX: withSpring(animatedValue.value ? 0.95 : 1) },
      { scaleY: withSpring(animatedValue.value ? 0.95 : 1) },
    ],
  }));

  const animatedOpacityStyle = useAnimatedStyle(() => ({
    opacity: withSpring(animatedValue.value ? 1 : 0),
  }));

  const handleOnPress = (event: GestureResponderEvent) => {
    onPress?.(event);
  };

  const handleOnPressIn = (event: GestureResponderEvent) => {
    onPressIn?.(event);
  };

  const handleOnLongPress = (event: GestureResponderEvent) => {
    onLongPress?.(event);
  };

  const handleOnPressOut = (event: GestureResponderEvent) => {
    onPressOut?.(event);
  };

  return (
    <GestureDetector gesture={pressGesture}>
      <Pressable
        onPress={handleOnPress}
        onPressIn={handleOnPressIn}
        onLongPress={handleOnLongPress}
        onPressOut={handleOnPressOut}
        {...rest}
      >
        <View className="">
          <Animated.View
            className="absolute w-full h-full -z-10"
            style={animatedOpacityStyle}
          >
            <StyledLinearGradient
              colors={["#0000003d", "transparent"]}
              className="w-full h-full"
            />
          </Animated.View>

          <Animated.View
            className="p-5 px-4 gap-3 flex flex-row items-center"
            style={[animatedScaleStyle]}
          >
            {!!icons && (
              <View className={cn("h-full", description && "pt-1")}>
                {icons}
              </View>
            )}

            <View className="flex-1 gap-1">
              <Typography variant="headline">{title}</Typography>

              {!!description && (
                <Typography variant="caption" className="text-secondary">
                  {description}
                </Typography>
              )}
            </View>

            {!!actions && <View>{actions}</View>}
          </Animated.View>
        </View>
      </Pressable>
    </GestureDetector>
  );
}

export type MenuItemSeparatorProps = {
  hidden?: boolean;
};
export function MenuItemSeparator({ hidden }: MenuItemSeparatorProps) {
  if (hidden) return null;
  return <View className="flex border-card" />;
}
