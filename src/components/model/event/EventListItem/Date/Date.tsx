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
      <Text
        text={day}
        size="s"
        fontWeight="bold"
        textAlign="center"
        numberOfLines={1}
      />
      <Text
        text={monthShort}
        size="xs"
        color="disabled"
        textAlign="center"
        numberOfLines={1}
      />
    </View>
  );
};
