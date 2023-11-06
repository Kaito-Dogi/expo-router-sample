import { FC, useMemo } from "react";
import { Text as RNText, TextStyle } from "react-native";

import { styles, TextType } from "./styles";

type Props = {
  text: string;
  type: TextType;
};

const getStyle = (type: TextType): TextStyle => {
  switch (type) {
    case "medium":
      return styles.medium;
    case "bold":
      return styles.bold;
    case "small":
      return styles.small;
    case "large":
      return styles.large;
    case "title":
      return styles.title;
  }
};

/**
 * @package
 */
export const Text: FC<Props> = ({ text, type }) => {
  const style = useMemo(() => getStyle(type), [type]);
  return <RNText style={style}>{text}</RNText>;
};
