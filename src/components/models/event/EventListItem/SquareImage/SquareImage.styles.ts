import { dimens } from "@src/styles/dimens";
import { StyleSheet } from "react-native";

/** @package */
export const styles = StyleSheet.create({
  container: {
    position: "relative",
  },
  image: {
    height: 96,
    aspectRatio: 1,
    borderRadius: dimens.s,
  },
  date: {
    position: "absolute",
    top: dimens.xs,
    left: dimens.xs,
  },
});
