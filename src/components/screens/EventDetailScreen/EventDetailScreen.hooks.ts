import { format } from "date-fns";
import { useMemo } from "react";

/** @package */
export const useDay = (date: Date): string => {
  return useMemo(() => {
    return format(date, "yyyy/MM/dd");
  }, [date]);
};

/** @package */
export const useTime = (date: Date): string => {
  return useMemo(() => {
    return format(date, `HH:mm`);
  }, [date]);
};
