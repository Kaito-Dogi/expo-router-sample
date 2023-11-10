import { FC } from "react";
import { View } from "react-native";

import { Text } from "@/components/ui/Text";
import { Event } from "@/models/Event";

import { styles } from "./EventDetailScreen.styles";

type Props = {
  id: Event["id"];
};

/** @package */
export const EventDetailScreen: FC<Props> = ({ id }) => {
  return (
    <View style={styles.container}>
      <Text text={`${id}`} />
    </View>
  );
};
