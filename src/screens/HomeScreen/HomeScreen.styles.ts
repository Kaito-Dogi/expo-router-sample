import { StyleSheet } from "react-native";

import { colors } from "@/styles/colors";
import { dimens } from "@/styles/dimens";

/**
 * @package
 */
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: dimens.m,
    backgroundColor: colors.background,
    padding: dimens.m,
  },
});
