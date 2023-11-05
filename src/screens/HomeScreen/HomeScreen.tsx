import { StatusBar } from "expo-status-bar";
import { FC } from "react";
import { View } from "react-native";

import { Message } from "@/components/Message";

import { styles } from "./style";

type Props = {
  message: string;
};

/**
 * @package
 */
export const HomeScreen: FC<Props> = ({ message }) => {
  return (
    <View style={styles.container}>
      <Message message={message} />
      <StatusBar style="auto" />
    </View>
  );
};
