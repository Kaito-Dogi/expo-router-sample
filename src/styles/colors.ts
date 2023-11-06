type Colors =
  | "PRIMARY"
  | "ON_PRIMARY"
  | "SECONDARY"
  | "ON_SECONDARY"
  | "BACKGROUND"
  | "ON_BACKGROUND"
  | "SURFACE"
  | "ON_SURFACE"
  | "ERROR";

export const colors: {
  [key in Colors]: `#${string}`;
} = {
  PRIMARY: "#fff",
  ON_PRIMARY: "#222",
  SECONDARY: "#fff",
  ON_SECONDARY: "#222",
  BACKGROUND: "#fff",
  ON_BACKGROUND: "#222",
  SURFACE: "#fff",
  ON_SURFACE: "#222",
  ERROR: "#f00",
};
