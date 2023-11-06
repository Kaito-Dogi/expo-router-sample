import { useMemo } from "react";

import { ButtonType, styles } from "./Button.styles";

/**
 * @package
 */
export const useStyles = (type: ButtonType) => {
  return useMemo(() => {
    switch (type) {
      case "medium":
        return styles.medium;
      case "large":
        return styles.large;
    }
  }, [type]);
};
