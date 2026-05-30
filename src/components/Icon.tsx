import Entypo from "@expo/vector-icons/Entypo";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";

import { useAppTheme } from "@/themes/useAppTheme";

export type EntypoIcon = {
  variant: "entypo";
  name: "chevron-right" | "chevron-thin-right" | "moon" | "light-up" | "check";
  size?: number;
  color?: string;
};

export type FontAwesome6Icon = {
  variant: "fontawesome6";
  name: "chevron-right";
  size?: number;
  color?: string;
};

export type IconProps = EntypoIcon | FontAwesome6Icon;
export function AppIcon({ name, variant, color, size = 24 }: IconProps) {
  const { color: appColor } = useAppTheme();

  if (!color) color = appColor.icon.primary;

  if (variant === "entypo")
    return <Entypo name={name} size={size} color={color} />;

  if (variant === "fontawesome6")
    return <FontAwesome6 name={name} size={size} color={color} />;

  return null;
}
