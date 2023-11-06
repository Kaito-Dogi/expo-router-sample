import { StyleSheet, TextStyle } from "react-native";

import { colors } from "@/styles/colors";

/**
 * @package
 */
export type TextType = "medium" | "bold" | "small" | "large" | "title";

const buttonStyles: {
  [key in TextType]: TextStyle;
} = {
  medium: {
    alignSelf: "stretch",
    color: colors.ON_SURFACE,
    fontSize: 14,
  },
  bold: {
    alignSelf: "stretch",
    color: colors.ON_SURFACE,
    fontSize: 14,
    fontFamily: "bold",
  },
  small: {
    alignSelf: "stretch",
    color: colors.DISABLED,
    fontSize: 12,
  },
  large: {
    alignSelf: "stretch",
    color: colors.ON_SURFACE,
    fontSize: 18,
  },
  title: {
    alignSelf: "stretch",
    color: colors.ON_BACKGROUND,
    fontSize: 24,
  },
};

/**
 * @package
 */
export const styles = StyleSheet.create(buttonStyles);
