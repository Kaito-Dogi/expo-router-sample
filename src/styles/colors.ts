export type Color =
  | "primary"
  | "onPrimary"
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
  background: "#f9f9f9",
  onBackground: "#222",
  surface: "#fff",
  onSurface: "#222",
  disabled: "#a9a9a9",
};
