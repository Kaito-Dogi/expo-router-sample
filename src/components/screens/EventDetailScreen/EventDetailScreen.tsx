import { FC } from "react";
import { Image, ScrollView, View } from "react-native";

import { EventInfoBoxes } from "@/src/components/models/event/EventInfoBoxes";
import { Button } from "@/src/components/ui/Button";
import { Divider } from "@/src/components/ui/Divider";
import { Spacer } from "@/src/components/ui/Spacer";
import { Text } from "@/src/components/ui/Text";
import { mockEvents } from "@/src/mocks/events";
import { Event } from "@/src/models/Event";

import { styles } from "./EventDetailScreen.styles";

type Props = {
  id: Event["id"];
};

/** @package */
export const EventDetailScreen: FC<Props> = ({ id }) => {
  const event = mockEvents.find((event) => event.id === id);

  if (!event) {
    console.log(id);
    return (
      <View style={styles.emptyView}>
        <Text
          text="イベントが存在しません"
          color="disabled"
          textAlign="center"
        />
      </View>
    );
  }

  const { description, imageUrl, name, price } = event;

  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.contentContainer}
      >
        <Image source={{ uri: imageUrl }} style={styles.image} />
        <Text text={name} size="l" fontWeight="bold" numberOfLines={1} />
        <Spacer />
        <Divider />
        <Spacer />
        <EventInfoBoxes event={event} />
        <Spacer />
        <Divider />
        <Spacer />
        <Text text={description} />
      </ScrollView>
      <View style={styles.bottomRow}>
        <View style={styles.priceTextContainer}>
          <Text
            text={price === 0 ? "FREE" : `¥${price}`}
            size="l"
            fontWeight="bold"
            textAlign="center"
          />
        </View>
        <Button
          text="参加する"
          onClick={() => {
            console.log("参加する");
          }}
          size="l"
        />
      </View>
    </View>
  );
};
