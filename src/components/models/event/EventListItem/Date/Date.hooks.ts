import { format } from "date-fns";
import { useMemo } from "react";

/** @package */
export const useDay = (date: Date): string => {
  return useMemo(() => {
    return format(date, "dd");
  }, [date]);
};

/** @package */
export const useMonthShort = (date: Date): string => {
  return useMemo(() => {
    return format(date, "MMM");
  }, [date]);
};
