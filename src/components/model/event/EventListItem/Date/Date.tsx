import { FC } from "react";
import { View } from "react-native";

import { Text } from "@/components/ui/Text";
import { Event } from "@/models/Event";

import { useDay, useMonthShort } from "./Date.hooks";
import { styles } from "./Date.styles";

type Props = {
  date: Event["date"];
};

/** @package */
export const Date: FC<Props> = ({ date }) => {
  const day = useDay(date);
  const monthShort = useMonthShort(date);

  return (
    <View style={styles.container}>
      <Text size="s" fontWeight="bold" textAlign="center">
        {day}
      </Text>
      <Text size="xs" color="disabled" textAlign="center">
        {monthShort}
      </Text>
    </View>
  );
};
