import { StyleSheet } from "react-native";

import { colors } from "@/src/styles/colors";
import { dimens } from "@/src/styles/dimens";

/** @package */
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  scrollView: {
    backgroundColor: colors.background,
  },
  contentContainer: {
    gap: dimens.s,
    backgroundColor: colors.background,
    padding: dimens.m,
    paddingBottom: dimens.l,
  },
  image: {
    alignSelf: "stretch",
    aspectRatio: 1.618,
    borderRadius: dimens.m,
  },
  bottomRow: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    gap: dimens.m,
    backgroundColor: colors.surface,
    padding: dimens.s,
    shadowColor: colors.onBackground,
    shadowOffset: {
      width: 0,
      height: -2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  priceTextContainer: {
    flex: 1,
    justifyContent: "center",
  },
  emptyView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.background,
  },
});
