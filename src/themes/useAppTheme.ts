import { useEffect } from "react";

import { Uniwind, useUniwind } from "uniwind";

import { component } from "./component";

type ThemeName = "light" | "dark";
export const useAppTheme = () => {
  const { theme, hasAdaptiveThemes } = useUniwind();

  const switchTheme = (newTheme: ThemeName) => {
    Uniwind.setTheme(newTheme);
  };

  useEffect(() => {
    if (hasAdaptiveThemes) switchTheme("dark");
  }, [theme, hasAdaptiveThemes]);

  return {
    color: component[theme],
    switchTheme: switchTheme,
    theme,
  };
};
