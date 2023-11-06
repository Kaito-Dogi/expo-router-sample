import { FC } from "react";
import { Text as RNText } from "react-native";

import { useStyle } from "./Text.hooks";

/**
 * @package
 */
export type TextType = "medium" | "bold" | "small" | "large" | "title";

type Props = {
  text: string;
  type: TextType;
};

/**
 * @package
 */
export const Text: FC<Props> = ({ text, type }) => {
  const style = useStyle(type);
  return <RNText style={style}>{text}</RNText>;
};
