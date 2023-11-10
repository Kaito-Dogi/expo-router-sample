import { FC } from "react";
import { View } from "react-native";

import { Spacer } from "@/components/ui/Spacer";
import { Text } from "@/components/ui/Text";
import { Event } from "@/models/Event";

import { styles } from "./EventListItem.styles";
import { LocationText } from "./LocationText";
import { PriceText } from "./PriceText";
import { SquareImage } from "./SquareImage";

type Props = {
  event: Event;
};

/** @package */
export const EventListItem: FC<Props> = ({ event }) => {
  return (
    <View style={styles.container}>
      <SquareImage imageUrl={event.imageUrl} date={event.date} />
      <View style={styles.textContainer}>
        <Text size="m" color="onSurface" fontWeight="bold">
          {event.name}
        </Text>
        <Spacer />
        <View style={styles.locationAndPriceContainer}>
          <LocationText location={event.location} />
          <Spacer />
          <PriceText price={event.price} />
        </View>
      </View>
    </View>
  );
};
