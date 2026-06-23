import { Text, TextProps } from "react-native";
import { StyleSheet } from "react-native-unistyles";

export type TypographyProps = TextProps;

export const Typography = (props: TypographyProps) => {
  const { style, ...rest } = props;

  return <Text style={[styles.base, style]} {...rest} />;
};

const styles = StyleSheet.create((theme) => ({
  base: {
    color: theme.colors.typography,
  },
}));
