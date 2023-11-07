import { FC, ReactNode } from "react";
import { Text as RNText } from "react-native";

import { useStyle } from "./Text.hooks";
import { styles } from "./Text.styles";
import { FontSize, FontWeight, TextAlign, TextColor } from "./Text.types";

type Props = {
  color: TextColor;
  size: FontSize;
  textAlign: TextAlign;
  fontWeight: FontWeight;
  children: ReactNode;
};

/** @package */
export const Text: FC<Props> = ({
  children,
  color,
  fontWeight,
  size,
  textAlign,
}) => {
  const style = useStyle(color, fontWeight, size, textAlign);
  return <RNText style={[style, styles.text]}>{children}</RNText>;
};
