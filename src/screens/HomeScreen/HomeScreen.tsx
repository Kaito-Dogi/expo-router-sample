import { FC, useCallback } from "react";
import { View } from "react-native";

import { EventListItem } from "@/components/model/event/EventListItem";
import { Text } from "@/components/ui/Text";
import { mockEvents } from "@/mocks/events";
import { Event } from "@/models/Event";

import { styles } from "./HomeScreen.styles";

/** @package */
export const HomeScreen: FC = () => {
  const onEventClick = useCallback((event: Event) => {
    console.log("event: ", event.name);
  }, []);
  return (
    <View style={styles.container}>
      <Text
        text={"おすすめのイベント"}
        size="xl"
        fontWeight="bold"
        numberOfLines={1}
      />
      {mockEvents.map((event) => {
        return (
          <EventListItem
            event={event}
            onEventClick={onEventClick}
            key={event.id}
          />
        );
      })}
    </View>
  );
};
