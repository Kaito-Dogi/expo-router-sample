import { FC } from "react";
import { Pressable, Text } from "react-native";

import { useTextStyle } from "./Button.hooks";
import { styles } from "./Button.styles";

/**
 * @package
 */
export type ButtonType = "medium" | "large";

type Props = {
  text: string;
  type: ButtonType;
};

/**
 * @package
 */
export const Button: FC<Props> = ({ text, type }) => {
  const textStyle = useTextStyle(type);
  return (
    <Pressable style={styles.container}>
      <Text style={textStyle}>{text}</Text>
    </Pressable>
  );
};
