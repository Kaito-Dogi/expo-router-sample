import { FC, useMemo } from "react";
import { Text as RNText, TextStyle } from "react-native";

import { styles, TextType } from "./styles";

type Props = {
  text: string;
  type: TextType;
};

const getStyle = (type: TextType): TextStyle => {
  let style: TextStyle;
  switch (type) {
    case "medium":
      style = styles.medium;
      break;
    case "bold":
      style = styles.bold;
      break;
    case "small":
      style = styles.small;
      break;
    case "large":
      style = styles.large;
      break;
    case "title":
      style = styles.title;
      break;
  }
  return style;
};

/**
 * @package
 */
export const Text: FC<Props> = ({ text, type }) => {
  const style = useMemo(() => getStyle(type), [type]);
  return <RNText style={style}>{text}</RNText>;
};
