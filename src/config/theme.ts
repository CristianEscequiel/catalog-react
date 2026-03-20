import { activeClient } from "./client";

export type { ThemeColors, ThemeConfig, ThemeMode } from "./client";

export const themeConfig = activeClient.theme;
