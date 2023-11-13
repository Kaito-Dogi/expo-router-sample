import { FC } from "react";
import { Image, ScrollView, View } from "react-native";

import {
  CalendarIcon,
  ClockIcon,
  LocationIcon,
  PersonIcon,
} from "@/components/icons";
import { Button } from "@/components/ui/Button";
import { Divider } from "@/components/ui/Divider";
import { IconText } from "@/components/ui/IconText";
import { Spacer } from "@/components/ui/Spacer";
import { Text } from "@/components/ui/Text";
import { mockEvents } from "@/mocks/events";
import { Event } from "@/models/Event";

import { useDate, useTime } from "./EventDetailScreen.hooks";
import { styles } from "./EventDetailScreen.styles";

type Props = {
  id: Event["id"];
};

const defaultDatetime = new Date("1970-01-01T00:00:00");

/** @package */
export const EventDetailScreen: FC<Props> = ({ id }) => {
  const event = mockEvents.find((event) => event.id === id);

  const day = useDate(event?.datetime ?? defaultDatetime);
  const time = useTime(event?.datetime ?? defaultDatetime);

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

  const { description, imageUrl, location, name, organizer, price } = event;

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
        <View style={styles.textRow}>
          <View style={styles.textBox}>
            <IconText text="日付" icon={<CalendarIcon />} />
            <Text text={day} fontWeight="bold" numberOfLines={1} />
          </View>
          <View style={styles.textBox}>
            <IconText text="時間" icon={<ClockIcon />} />
            <Text text={time} fontWeight="bold" numberOfLines={1} />
          </View>
        </View>
        <View style={styles.textRow}>
          <View style={styles.textBox}>
            <IconText text="場所" icon={<LocationIcon />} />
            <Text text={location} fontWeight="bold" numberOfLines={1} />
          </View>
          <View style={styles.textBox}>
            <IconText text="主催" icon={<PersonIcon />} />
            <Text text={organizer} fontWeight="bold" numberOfLines={1} />
          </View>
        </View>
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
          text="購入する"
          onClick={() => {
            console.log("購入する");
          }}
          size="l"
        />
      </View>
    </View>
  );
};
