import { FC, useCallback } from "react";
import { Pressable, View } from "react-native";

import { LocationIcon } from "@/components/icons/LocationIcon";
import { IconText } from "@/components/ui/IconText";
import { Spacer } from "@/components/ui/Spacer";
import { Text } from "@/components/ui/Text";
import { Event } from "@/models/Event";

import { styles } from "./EventListItem.styles";
import { PriceText } from "./PriceText";
import { SquareImage } from "./SquareImage";

type Props = {
  event: Event;
  onEventClick: (event: Event) => void;
};

/** @package */
export const EventListItem: FC<Props> = ({ event, onEventClick }) => {
  const onPress = useCallback(() => {
    onEventClick(event);
  }, [event, onEventClick]);

  return (
    <Pressable style={styles.container} onPress={onPress}>
      <SquareImage imageUrl={event.imageUrl} date={event.date} />
      <View style={styles.textContainer}>
        <Text
          text={event.name}
          size="m"
          color="onSurface"
          fontWeight="bold"
          numberOfLines={2}
        />
        <Spacer />
        <View style={styles.locationAndPriceContainer}>
          <IconText text={event.location} icon={<LocationIcon />} />
          <PriceText price={event.price} />
        </View>
      </View>
    </Pressable>
  );
};
