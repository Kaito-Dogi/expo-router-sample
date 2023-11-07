import { FC } from "react";
import { View } from "react-native";

import { Text } from "@/components/ui/Text";

import { useDay, useMonthShort } from "./Date.hooks";
import { styles } from "./Date.styles";

type Props = {
  date: Date;
};

/** @package */
export const Date: FC<Props> = ({ date }) => {
  const day = useDay(date);
  const monthShort = useMonthShort(date);

  return (
    <View style={styles.container}>
      <Text fontWeight="bold" textAlign="center">
        {day}
      </Text>
      <Text size="s" color="disabled" textAlign="center">
        {monthShort}
      </Text>
    </View>
  );
};
