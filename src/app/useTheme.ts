import { useEffect, useState } from "react";
import { activeClient, type ThemeMode } from "../config/client";

const THEME_STORAGE_KEY = "catalog-theme";

const getInitialTheme = (): ThemeMode => {
  const storedTheme = localStorage.getItem(THEME_STORAGE_KEY);

  if (storedTheme === "light" || storedTheme === "dark") {
    return storedTheme;
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
};

const applyThemeColors = (theme: ThemeMode) => {
  const colors = activeClient.theme[theme];
  const accent = colors.accent ?? colors.primary;

  document.documentElement.style.setProperty("--color-primary", colors.primary);
  document.documentElement.style.setProperty("--color-bg", colors.bg);
  document.documentElement.style.setProperty("--color-text", colors.text);
  document.documentElement.style.setProperty("--color-accent", accent);
};

export const useTheme = () => {
  const [theme, setTheme] = useState<ThemeMode>(getInitialTheme);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    applyThemeColors(theme);
    localStorage.setItem(THEME_STORAGE_KEY, theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === "light" ? "dark" : "light"));
  };

  return { theme, toggleTheme };
};
