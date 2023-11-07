export type FontSize = "s" | "m" | "l" | "xl";

export const fontSize: {
  [key in FontSize]: number;
} = {
  s: 12,
  m: 14,
  l: 18,
  xl: 24,
};
