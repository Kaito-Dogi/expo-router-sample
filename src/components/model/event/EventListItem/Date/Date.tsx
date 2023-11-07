import { FC } from "react";
import { View } from "react-native";

import { Text } from "@/components/ui/Text";

import { useDay, useMonthShort } from "./Date.hooks";
import { styles } from "./Date.styles";

type Props = {
  date: Date;
};

/**
 * @package
 */
export const Date: FC<Props> = ({ date }) => {
  const day = useDay(date);
  const monthShort = useMonthShort(date);

  return (
    <View style={styles.container}>
      <Text type="bold" text={day} />
      <Text type="small" text={monthShort} />
    </View>
  );
};
