export type Color =
  | "primary"
  | "onPrimary"
  | "primaryContainer"
  | "background"
  | "onBackground"
  | "surface"
  | "onSurface"
  | "disabled";

export const colors: {
  [key in Color]: `#${string}`;
} = {
  primary: "#60dafb",
  onPrimary: "#222",
  primaryContainer: "#dff8fe",
  background: "#f9f9f9",
  onBackground: "#222",
  surface: "#fff",
  onSurface: "#222",
  disabled: "#a9a9a9",
};
