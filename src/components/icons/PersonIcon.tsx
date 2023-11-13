import { Ionicons } from "@expo/vector-icons";
import { colors } from "@src/styles/colors";
import { FC } from "react";

/** @package */
export const PersonIcon: FC = () => {
  return <Ionicons name="person-sharp" color={colors.disabled} size={16} />;
};
