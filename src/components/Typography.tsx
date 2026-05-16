import { Text, TextProps } from "react-native";

import { cva, VariantProps } from "class-variance-authority";

const typographyStyles = cva("text-primary", {
  variants: {
    variant: {
      body1: "text-base",
      bottomTab: "text-xs text-bottom-tabbar",
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
