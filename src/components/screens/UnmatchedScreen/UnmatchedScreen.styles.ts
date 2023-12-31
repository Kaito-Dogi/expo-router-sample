import { Platform, StatusBar, StyleSheet } from "react-native";

import { colors } from "@/src/styles/colors";
import { dimens } from "@/src/styles/dimens";

/** @package */
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: dimens.m,
    backgroundColor: colors.background,
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: dimens.s,
    paddingHorizontal: dimens.xl,
    borderRadius: dimens.s,
    backgroundColor: colors.primary,
  },
});
