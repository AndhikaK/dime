import { Text, TextProps } from "react-native";
import { StyleSheet, UnistylesVariants } from "react-native-unistyles";

export type TypographyProps = TextProps & UnistylesVariants<typeof styles>;

export const Typography = (props: TypographyProps) => {
  const { style, variant = "body-primary", ...rest } = props;

  styles.useVariants({ variant });

  return <Text style={[styles.base, style]} {...rest} />;
};

const styles = StyleSheet.create((theme) => ({
  base: {
    color: theme.colors["text-primary"],
    fontSize: 14,
    variants: {
      variant: {
        "subheading-semibold": {
          fontSize: 18,
          fontWeight: 700,
        },
        "body-primary": {
          fontSize: 16,
        },
        "body-secondary": {
          fontSize: 14,
        },
        "body-tertiary": {
          fontSize: 12,
        },
        button: {
          fontSize: 14,
          fontWeight: "bold",
        },
      },
    },
  },
}));
