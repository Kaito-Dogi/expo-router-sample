import { FC } from "react";
import { Text as RNText } from "react-native";

import { Type } from "@/styles/types";

import { useStyle } from "./Text.hooks";
import { styles } from "./Text.styles";
import { FontWeight, TextAlign, TextColor } from "./Text.types";

type Props = {
  text: string;
  numberOfLines?: number;
  size?: Type;
  color?: TextColor;
  textAlign?: TextAlign;
  fontWeight?: FontWeight;
};

/** @package */
export const Text: FC<Props> = ({
  color = "onSurface",
  fontWeight = "normal",
  numberOfLines = undefined,
  size = "m",
  text,
  textAlign = "left",
}) => {
  const style = useStyle(color, fontWeight, size, textAlign);
  return (
    <RNText style={[style, styles.text]} numberOfLines={numberOfLines}>
      {text}
    </RNText>
  );
};
