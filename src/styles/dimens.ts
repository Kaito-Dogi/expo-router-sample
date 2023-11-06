type Dimens = "XS" | "S" | "M" | "L" | "XL";

export const dimens: {
  [key in Dimens]: number;
} = {
  XS: 4,
  S: 8,
  M: 16,
  L: 24,
  XL: 32,
};
