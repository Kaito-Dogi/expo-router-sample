import { Ionicons } from "@expo/vector-icons";
import { colors } from "@src/styles/colors";
import { FC } from "react";

/** @package */
export const ClockIcon: FC = () => {
  return <Ionicons name="time-sharp" color={colors.disabled} size={16} />;
};
