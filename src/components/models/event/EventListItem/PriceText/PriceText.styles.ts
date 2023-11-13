import { colors } from "@src/styles/colors";
import { dimens } from "@src/styles/dimens";
import { StyleSheet } from "react-native";

/** @package */
export const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    width: 72,
    borderRadius: dimens.xs,
    backgroundColor: colors.primaryContainer,
    paddingVertical: dimens.xs,
  },
});
