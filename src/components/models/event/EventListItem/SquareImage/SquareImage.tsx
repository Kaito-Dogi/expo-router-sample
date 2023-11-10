import { FC } from "react";
import { Image, View } from "react-native";

import { Event } from "@/models/Event";

import { Date } from "../Date";
import { styles } from "./SquareImage.styles";

type Props = {
  imageUrl: Event["imageUrl"];
  date: Event["date"];
};

/** @package */
export const SquareImage: FC<Props> = ({ date, imageUrl }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: imageUrl }} style={styles.image} />
      <View style={styles.date}>
        <Date date={date} />
      </View>
    </View>
  );
};
