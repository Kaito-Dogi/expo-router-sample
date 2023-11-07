import { StyleSheet } from "react-native";

import { dimens } from "@/styles/dimens";

/** @package */
export const styles = StyleSheet.create({
  container: {
    position: "relative",
    borderRadius: dimens.s,
  },
  image: {
    height: 96,
    aspectRatio: 1,
    borderRadius: dimens.m,
  },
  date: {
    position: "absolute",
    top: dimens.s,
    left: dimens.s,
  },
});
