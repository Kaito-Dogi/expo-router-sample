import { MaterialCommunityIcons } from "@expo/vector-icons";
import { colors } from "@src/styles/colors";
import { FC } from "react";

/** @package */
export const CalendarIcon: FC = () => {
  return (
    <MaterialCommunityIcons name="calendar" color={colors.disabled} size={16} />
  );
};
