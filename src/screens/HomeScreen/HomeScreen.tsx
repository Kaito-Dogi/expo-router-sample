import { router } from "expo-router";
import { FC, useCallback } from "react";
import { FlatList, View } from "react-native";

import { EventListItem } from "@/components/model/event/EventListItem";
import { Spacer } from "@/components/ui/Spacer";
import { Text } from "@/components/ui/Text";
import { mockEvents } from "@/mocks/events";
import { Event } from "@/models/Event";
import { dimens } from "@/styles/dimens";

import { styles } from "./HomeScreen.styles";

/** @package */
export const HomeScreen: FC = () => {
  const onEventClick = useCallback((event: Event) => {
    router.push(`/events/${event.id}`);
  }, []);

  return (
    <View style={styles.container}>
      <FlatList<Event>
        data={mockEvents}
        renderItem={({ item }) => (
          <EventListItem event={item} onEventClick={onEventClick} />
        )}
        keyExtractor={(item) => `${item.id}`}
        ListHeaderComponent={
          <>
            <Text
              text={"おすすめのイベント"}
              size="xl"
              fontWeight="bold"
              numberOfLines={1}
            />
            <Spacer height={"m"} />
          </>
        }
        ItemSeparatorComponent={() => <Spacer height={"m"} />}
        contentContainerStyle={{
          paddingVertical: dimens.xl,
        }}
      />
    </View>
  );
};
