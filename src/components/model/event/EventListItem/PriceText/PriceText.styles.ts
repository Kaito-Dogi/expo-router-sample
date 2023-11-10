import { StyleSheet } from "react-native";

import { colors } from "@/styles/colors";
import { dimens } from "@/styles/dimens";

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
