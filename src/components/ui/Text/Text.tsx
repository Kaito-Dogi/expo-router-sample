import { FC } from "react";
import { Text as RNText } from "react-native";

import { FontSize } from "@/styles/fontSize";

import { useStyle } from "./Text.hooks";
import { styles } from "./Text.styles";
import { FontWeight, TextAlign, TextColor } from "./Text.types";

type Props = {
  text: string;
  size?: FontSize;
  color?: TextColor;
  textAlign?: TextAlign;
  fontWeight?: FontWeight;
};

/** @package */
export const Text: FC<Props> = ({
  color = "onSurface",
  fontWeight = "normal",
  size = "m",
  text,
  textAlign = "left",
}) => {
  const style = useStyle(color, fontWeight, size, textAlign);
  return <RNText style={[style, styles.text]}>{text}</RNText>;
};
