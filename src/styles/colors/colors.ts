import { Color } from "./Color";

/** @package */
export const colors: {
  [key in Color]: `#${string}`;
} = {
  primary: "#000",
  onPrimary: "#fff",
  primaryContainer: "#e0e0e0",
  background: "#f9f9f9",
  onBackground: "#222",
  surface: "#fff",
  onSurface: "#222",
  disabled: "#a9a9a9",
};
