import { FC } from "react";
import { Pressable } from "react-native";

import { useStyles } from "./Button.hooks";
import { ButtonType } from "./Button.styles";

type Props = {
  text: string;
  type: ButtonType;
};

/**
 * @package
 */
export const Button: FC<Props> = ({ text, type }) => {
  const style = useStyles(type);
  return <Pressable style={style}>{text}</Pressable>;
};
