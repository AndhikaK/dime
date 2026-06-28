import { ReactNode } from "react";
import { View } from "react-native";
import { StyleSheet } from "react-native-unistyles";

import { useHardwareBackpress } from "@/hooks/useHardwareBackpress";
import { tokens } from "@/styles/tokens";

import { Button } from "./Button";
import { Icon } from "./Icon";
import { Typography } from "./Typography";

export type AppbarProps = {
  title: string;
  actionComponent?: ReactNode;
  goBack?: boolean;
  onBackPress?: () => void;
};
export const Appbar = (props: AppbarProps) => {
  const { title = "", goBack = true, actionComponent } = props;

  const { canGoBack, goBackAction } = useHardwareBackpress();

  return (
    <View style={styles.container}>
      <View style={styles.contentWrapper}>
        <View
          style={[
            styles.headerWrapper,
            canGoBack && goBack
              ? styles.backButtonPadding
              : styles.noBackButtonPadding,
          ]}
        >
          {canGoBack && goBack && (
            <Button
              variant="ghost"
              onPress={goBackAction}
              icon={<Icon name="arrow-left" />}
            />
          )}

          <Typography variant="subheading-semibold">{title}</Typography>
        </View>

        {actionComponent}
      </View>
    </View>
  );
};

const styles = StyleSheet.create((theme, rt) => ({
  container: {
    width: "100%",
    paddingTop: rt.insets.top,
  },
  contentWrapper: {
    padding: tokens["spacing-12"],
    paddingLeft: tokens["spacing-4"],
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  headerWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: tokens["spacing-8"],
  },
  backButtonPadding: {
    padding: tokens["spacing-4"],
  },
  noBackButtonPadding: {
    padding: tokens["spacing-12"],
  },
}));
