import { colors } from "@src/styles/colors";
import { dimens } from "@src/styles/dimens";
import { StyleSheet } from "react-native";

/** @package */
export const styles = StyleSheet.create({
  container: {
    aspectRatio: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.surface,
    borderRadius: dimens.xs,
    padding: dimens.xxs,
  },
});
