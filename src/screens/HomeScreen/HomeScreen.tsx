import { FC } from "react";
import { SafeAreaView, Text } from "react-native";

import { styles } from "./styles";

type Props = {
  text: string;
};

/**
 * @package
 */
export const HomeScreen: FC<Props> = ({ text }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>{text}</Text>
    </SafeAreaView>
  );
};
