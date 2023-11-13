import { Ionicons } from "@expo/vector-icons";
import { colors } from "@src/styles/colors";
import { FC } from "react";

/** @package */
export const LocationIcon: FC = () => {
  return <Ionicons name="location-sharp" color={colors.disabled} size={16} />;
};
