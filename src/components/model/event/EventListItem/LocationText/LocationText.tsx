import { FC } from "react";
import { View } from "react-native";

import { LocationIcon } from "@/components/icon/LocationIcon";
import { Text } from "@/components/ui/Text";
import { Event } from "@/models/Event";

import { styles } from "./LocationText.styles";

type Props = {
  location: Event["location"];
};

/** @package */
export const LocationText: FC<Props> = ({ location }) => {
  return (
    <View style={styles.container}>
      <LocationIcon />
      <Text color="disabled" fontWeight="bold">
        {location}
      </Text>
    </View>
  );
};
