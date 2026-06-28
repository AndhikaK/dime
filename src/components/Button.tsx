import { ReactNode } from "react";
import {
  TouchableHighlight,
  TouchableHighlightProps,
  View,
} from "react-native";
import { StyleSheet, UnistylesVariants } from "react-native-unistyles";

import { tokens } from "@/styles/tokens";

import { Typography } from "./Typography";

export type ButtonProps = TouchableHighlightProps & {
  label?: string;
  icon?: ReactNode;
} & UnistylesVariants<typeof styles>;
export const Button = (props: ButtonProps) => {
  const { label, icon, variant = "secondary", ...rest } = props;

  styles.useVariants({
    variant,
  });

  return (
    <TouchableHighlight {...rest} underlayColor={"transparent"}>
      <View style={styles.container}>
        <Typography variant="button" style={styles.label}>
          {label}
        </Typography>

        {icon}
      </View>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create((theme) => ({
  container: {
    flexDirection: "row",
    alignItems: "center",

    variants: {
      variant: {
        primary: {},
        secondary: {
          gap: tokens["spacing-8"],
          paddingHorizontal: tokens["spacing-16"],
          paddingVertical: tokens["spacing-8"],
          backgroundColor: theme.colors.brand + "22",
          borderRadius: tokens["radius-full"],
          borderWidth: tokens["border-2"],
          borderColor: theme.colors.brand,
        },
        ghost: {
          padding: tokens["spacing-8"],
          borderRadius: tokens["radius-full"],
        },
      },
    },
  },
  label: {
    color: theme.colors.brand,
    variants: {
      variant: {
        secondary: {
          color: theme.colors["text-primary"],
        },
      },
    },
  },
}));
