type Colors =
  | "PRIMARY"
  | "ON_PRIMARY"
  | "BACKGROUND"
  | "ON_BACKGROUND"
  | "SURFACE"
  | "ON_SURFACE"
  | "DISABLED";

export const colors: {
  [key in Colors]: `#${string}`;
} = {
  PRIMARY: "#60dafb",
  ON_PRIMARY: "#222",
  BACKGROUND: "#f9f9f9",
  ON_BACKGROUND: "#222",
  SURFACE: "#fff",
  ON_SURFACE: "#222",
  DISABLED: "#a9a9a9",
};
