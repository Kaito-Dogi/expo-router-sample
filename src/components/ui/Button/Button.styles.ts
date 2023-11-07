import { StyleSheet } from "react-native";

import { colors } from "@/styles/colors";
import { dimens } from "@/styles/dimens";

/** @package */
export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "stretch",
    gap: dimens.s,
    padding: dimens.s,
    backgroundColor: colors.primary,
  },
  text: {
    alignSelf: "stretch",
  },
});
