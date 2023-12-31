import { lighten } from "polished";

const blue = "#141926";
const gray = "#BFBFBF";
const red = "#B50000";

const getColorsShades = (color: string) => ({
  lighter: lighten(0, color),
  hover_lighter: lighten(0.3, color),
});

export const colors = {
  primary: getColorsShades(blue),
  secondary: getColorsShades(gray),

  menu: {
    item: "#253046",
  },

  menu_text: "#BFBFBF",
  text: "#000",

  context: {
    success: "",
    error: "",
    warning: "",
    info: "",
    wrapper: "#F0F4F7",
  },

  login: {
    primary: getColorsShades(red),
    hover_primary: getColorsShades(red),
  },
};

export type ThemeColors = typeof colors;
