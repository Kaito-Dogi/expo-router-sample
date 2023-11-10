export type Dimen = "xxs" | "xs" | "s" | "m" | "l" | "xl";

export const dimens: {
  [key in Dimen]: number;
} = {
  xxs: 4,
  xs: 8,
  s: 12,
  m: 16,
  l: 24,
  xl: 32,
};
