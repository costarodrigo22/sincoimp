import { create } from "zustand";
import { ThemeColors, colors } from "./colors";
import { ThemeSpacing, spacing } from "./spacings";

interface ThemeStoreProps {
  colors: ThemeColors;
  spacing: ThemeSpacing;
}

export const useTheme = create<ThemeStoreProps>(() => ({
  colors: colors,
  spacing: spacing,
}));
