import { type } from "os";
import { useMemo } from "react";
import { TextStyle } from "react-native";

import { colors } from "@/styles/colors";

import { FontSize, FontWeight, TextAlign, TextColor } from "./Text.types";

const useTextColor = (color: TextColor): `#${string}` => {
  return useMemo(() => {
    switch (color) {
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
      case "s":
        return 12;
      case "m":
        return 14;
      case "l":
        return 18;
      case "xl":
        return 24;
    }
  }, [size]);
};

/**
 * @package
 */
export const useStyle = (
  color: TextColor,
  fontWeight: FontWeight,
  size: FontSize,
  textAlign: TextAlign
): TextStyle => {
  return useMemo(() => {
    const textColor = useTextColor(color);
    const fontSize = useTextSize(size);
    return {
      color: textColor,
      fontWeight,
      fontSize,
      textAlign,
    };
  }, [type]);
};
