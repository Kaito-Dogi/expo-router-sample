export type FontSize = "xs" | "s" | "m" | "l" | "xl";

export const fontSize: {
  [key in FontSize]: number;
} = {
  xs: 10,
  s: 12,
  m: 14,
  l: 18,
  xl: 24,
};
