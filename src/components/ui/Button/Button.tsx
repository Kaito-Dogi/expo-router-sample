import { FC, useMemo } from "react";
import { Pressable, ViewStyle } from "react-native";

import { ButtonType, styles } from "./styles";

type Props = {
  text: string;
  type: ButtonType;
};

const getStyle = (type: ButtonType): ViewStyle => {
  switch (type) {
    case "medium":
      return styles.medium;
    case "large":
      return styles.large;
  }
};

/**
 * @package
 */
export const Button: FC<Props> = ({ text, type }) => {
  const style = useMemo(() => getStyle(type), [type]);
  return <Pressable style={style}>{text}</Pressable>;
};
