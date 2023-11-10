import { useMemo } from "react";
import { TextStyle } from "react-native";

import { fontSize } from "@/styles/fontSize";

import { Size } from "./Button.types";

const useFontSizeStyle = (size: Size): number => {
  const style = useMemo(() => {
    switch (size) {
      case "m":
        return fontSize.m;
      case "l":
        return fontSize.l;
    }
  }, [size]);
  return style;
};

/** @package */
export const useTextStyle = (size: Size): TextStyle => {
  const fontSize = useFontSizeStyle(size);

  const textStyle = useMemo(() => {
    return {
      fontSize,
    };
  }, [size]);
  return textStyle;
};
