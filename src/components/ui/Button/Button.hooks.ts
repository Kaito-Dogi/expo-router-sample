import { useMemo } from "react";

import { ButtonType } from "./Button";
import { styles } from "./Button.styles";

/**
 * @package
 */
export const useTextStyle = (type: ButtonType) => {
  return useMemo(() => {
    switch (type) {
      case "medium":
        return styles.medium;
      case "large":
        return styles.large;
    }
  }, [type]);
};
