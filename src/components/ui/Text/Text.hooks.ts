import { useMemo } from "react";
import { TextStyle } from "react-native";

import { colors } from "@/styles/colors";
import { FontSize, fontSize } from "@/styles/fontSize";

import { FontWeight, TextAlign, TextColor } from "./Text.types";

const useTextColor = (color: TextColor): `#${string}` => {
  return useMemo(() => {
    switch (color) {
      case "primary":
        return colors.primary;
      case "onSurface":
        return colors.onSurface;
      case "disabled":
        return colors.disabled;
    }
  }, [color]);
};

const useTextSize = (size: FontSize): number => {
  return useMemo(() => {
    switch (size) {
      case "xs":
        return fontSize.xs;
      case "s":
        return fontSize.s;
      case "m":
        return fontSize.m;
      case "l":
        return fontSize.l;
      case "xl":
        return fontSize.xl;
    }
  }, [size]);
};

/** @package */
export const useStyle = (
  color: TextColor,
  fontWeight: FontWeight,
  size: FontSize,
  textAlign: TextAlign
): TextStyle => {
  const textColor = useTextColor(color);
  const fontSize = useTextSize(size);

  const style = useMemo(() => {
    return {
      color: textColor,
      fontWeight,
      fontSize,
      textAlign,
    };
  }, [color, fontWeight, size, textAlign]);
  return style;
};
