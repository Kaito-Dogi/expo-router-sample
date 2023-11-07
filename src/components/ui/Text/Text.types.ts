import { Color } from "@/styles/colors";
import { Dimen } from "@/styles/dimens";

/** @package */
export type TextColor = Extract<Color, "onSurface" | "disabled">;

/** @package */
export type FontSize = Extract<Dimen, "s" | "m" | "l" | "xl">;

/** @package */
export type TextAlign = "left" | "center";

/** @package */
export type FontWeight = "normal" | "bold";
