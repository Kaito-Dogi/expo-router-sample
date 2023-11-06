import { useMemo } from "react";
import { TextStyle } from "react-native";

import { TextType } from "./Text";
import { styles } from "./Text.styles";

/**
 * @package
 */
export const useStyle = (type: TextType): TextStyle => {
  return useMemo(() => {
    switch (type) {
      case "medium":
        return styles.medium;
      case "bold":
        return styles.bold;
      case "small":
        return styles.small;
      case "large":
        return styles.large;
      case "title":
        return styles.title;
    }
  }, [type]);
};
