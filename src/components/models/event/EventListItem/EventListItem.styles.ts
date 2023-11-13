import { StyleSheet } from "react-native";

import { colors } from "@/src/styles/colors";
import { dimens } from "@/src/styles/dimens";

/** @package */
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    gap: dimens.s,
    padding: dimens.s,
    borderRadius: dimens.m,
    backgroundColor: colors.surface,
  },
  textContainer: {
    flex: 1,
    paddingTop: dimens.xs,
  },
  locationAndPriceContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
});
