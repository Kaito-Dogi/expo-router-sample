import { FC } from "react";
import { View } from "react-native";

import {
  CalendarIcon,
  ClockIcon,
  LocationIcon,
  PersonIcon,
} from "@/src/components/icons";
import { Event } from "@/src/models/Event";

import { useDate, useTime } from "./EventInfo.hooks";
import { styles } from "./EventInfoBoxes.styles";
import { InfoBoxRow } from "./InfoBoxRow";

type Props = {
  event: Event;
};

/** @package */
export const EventInfoBoxes: FC<Props> = ({ event }) => {
  const date = useDate(event.datetime);
  const time = useTime(event.datetime);

  return (
    <View style={styles.container}>
      <InfoBoxRow
        infoList={[
          {
            text: date,
            label: "日付",
            icon: <CalendarIcon />,
          },
          {
            text: time,
            label: "時間",
            icon: <ClockIcon />,
          },
        ]}
      />
      <InfoBoxRow
        infoList={[
          {
            text: event.location,
            label: "場所",
            icon: <LocationIcon />,
          },
          {
            text: event.organizer,
            label: "主催",
            icon: <PersonIcon />,
          },
        ]}
      />
    </View>
  );
};
