import { Ionicons } from "@expo/vector-icons";
import { FC } from "react";

import { colors } from "@/styles/colors";

export const LocationIcon: FC = () => {
  return (
    <Ionicons name="ios-location-sharp" color={colors.disabled} size={16} />
  );
};
