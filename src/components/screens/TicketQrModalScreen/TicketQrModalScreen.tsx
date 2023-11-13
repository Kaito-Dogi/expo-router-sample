import { FC } from "react";
import { Image, View } from "react-native";

import { Ticket } from "@/src/models/Ticket";

import { styles } from "./TicketQrModalScreen.styles";

type Props = {
  id: Ticket["event"]["id"];
};

/** @package */
export const TicketQrModalScreen: FC<Props> = ({ id }) => {
  // FIXME: 現状は使用していないが、ESLint の警告を避けるため呼び出している
  id;

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require("@/assets/expo-router-sample-qr.png")}
      />
    </View>
  );
};
