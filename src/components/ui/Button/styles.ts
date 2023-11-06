import { StyleSheet, TextStyle } from "react-native";

import { colors } from "@/styles/colors";

/**
 * @package
 */
export type ButtonType = "medium" | "large";

const buttonStyles: {
  [key in ButtonType]: TextStyle;
} = {
  medium: {
    alignSelf: "stretch",
    color: colors.ON_SURFACE,
    fontSize: 14,
  },
  large: {
    alignSelf: "stretch",
    color: colors.ON_SURFACE,
    fontSize: 18,
  },
};

/**
 * @package
 */
export const styles = StyleSheet.create(buttonStyles);
