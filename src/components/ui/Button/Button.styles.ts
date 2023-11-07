import { StyleSheet, TextStyle } from "react-native";

import { colors } from "@/styles/colors";
import { dimens } from "@/styles/dimens";

import { ButtonType } from "./Button";

const textStyles: {
  [key in ButtonType]: TextStyle;
} = {
  medium: {
    alignSelf: "stretch",
    color: colors.onSurface,
    fontSize: 14,
  },
  large: {
    alignSelf: "stretch",
    color: colors.onSurface,
    fontSize: 18,
  },
};

/**
 * @package
 */
export const styles = StyleSheet.create({
  ...textStyles,
  container: {
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "stretch",
    padding: dimens.s,
    backgroundColor: colors.primary,
  },
});
