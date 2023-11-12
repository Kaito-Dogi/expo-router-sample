import { StyleSheet } from "react-native";

import { colors } from "@/styles/colors/colors";
import { dimens } from "@/styles/dimens";

/** @package */
export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "stretch",
    gap: dimens.s,
    padding: dimens.s,
    borderRadius: dimens.m,
    backgroundColor: colors.surface,
  },
  textContainer: {
    flex: 1,
    alignSelf: "stretch",
    paddingTop: dimens.xs,
    paddingBottom: dimens.xxs,
  },
  locationAndPriceContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
});
