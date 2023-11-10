import { FC } from "react";
import { View } from "react-native";

import { Text } from "@/components/ui/Text";
import { Event } from "@/models/Event";

import { styles } from "./PriceText.styles";

type Props = {
  price: Event["price"];
};

/** @package */
export const PriceText: FC<Props> = ({ price }) => {
  return (
    <View style={styles.container}>
      <Text
        text={price === 0 ? "FREE" : `¥${price}`}
        color="primary"
        textAlign="center"
        fontWeight="bold"
      />
    </View>
  );
};
