import { Text, TextProps } from "react-native";

import { cva, VariantProps } from "class-variance-authority";

const typographyStyles = cva("text-primary tracking-wide leading-none", {
  variants: {
    variant: {
      headline: "text-lg font-bold",
      body1: "text-base",
      "appbar-title": "text-md font-medium",
      bottomTab: "text-xs text-bottom-tabbar",
      caption: "text-sm",
    },
  },
  defaultVariants: { variant: "body1" },
});

type TypographyVariant = VariantProps<typeof typographyStyles>;
interface TypographyProps extends TextProps, TypographyVariant {}

export function Typography(props: TypographyProps) {
  const { className, variant, ...rest } = props;

  return (
    <Text className={typographyStyles({ variant, className })} {...rest} />
  );
}
