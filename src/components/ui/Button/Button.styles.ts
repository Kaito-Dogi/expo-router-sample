import { colors } from "@src/styles/colors";
import { dimens } from "@src/styles/dimens";
import { StyleSheet } from "react-native";

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
