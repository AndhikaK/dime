import { TouchableHighlight, TouchableHighlightProps } from "react-native";
import { StyleSheet } from "react-native-unistyles";

import { Typography } from "./Typography";

export type ButtonProps = TouchableHighlightProps & {
  label: string;
};
export const Button = (props: ButtonProps) => {
  const { label, ...rest } = props;

  return (
    <TouchableHighlight>
      <Typography>{label}</Typography>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create(() => ({
  container: {},
}));
