import { FC, ReactNode } from "react";
import { Pressable, Text } from "react-native";

import { useTextStyle } from "./Button.hooks";
import { styles } from "./Button.styles";
import { Size } from "./Button.types";

type Props = {
  text: string;
  onClick: () => void;
  size?: Size;
  icon?: ReactNode;
};

/** @package */
export const Button: FC<Props> = ({ icon, onClick, size = "m", text }) => {
  const textStyle = useTextStyle(size);
  return (
    <Pressable onPress={onClick} style={styles.container}>
      {!!icon && icon}
      <Text style={[textStyle, styles.text]} numberOfLines={1}>
        {text}
      </Text>
    </Pressable>
  );
};
