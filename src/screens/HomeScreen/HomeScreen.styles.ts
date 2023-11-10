import { StyleSheet } from "react-native";

import { colors } from "@/styles/colors";
import { dimens } from "@/styles/dimens";

/**
 * @package
 */
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    paddingHorizontal: dimens.m,
  },
});
