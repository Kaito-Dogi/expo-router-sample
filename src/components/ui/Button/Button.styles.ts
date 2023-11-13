import { StyleSheet } from "react-native";

import { colors } from "@/styles/colors";
import { dimens } from "@/styles/dimens";

/** @package */
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: dimens.s,
    padding: dimens.s,
    borderRadius: dimens.s,
    backgroundColor: colors.primary,
  },
});
