import { StyleSheet } from "react-native";

import { colors } from "@/styles/colors";
import { dimens } from "@/styles/dimens";

/** @package */
export const styles = StyleSheet.create({
  container: {
    aspectRatio: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.background,
    textAlign: "center",
    borderRadius: dimens.s,
  },
});
