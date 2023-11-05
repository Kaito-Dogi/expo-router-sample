import { FC } from "react";
import { Text } from "react-native";

import { styles } from "./styles";

type Props = {
  message: string;
};

/**
 * @package
 */
export const Message: FC<Props> = ({ message }) => {
  return <Text style={styles.message}>{message}</Text>;
};
