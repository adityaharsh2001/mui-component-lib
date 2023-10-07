"use client"
import { useContext } from "react";
import {
  appDarkTheme,
  appLightTheme,
  CustomMuiThemeProviderContext,
  CustomTheme,
} from "./CustomMuiThemeProvider.constants";

export const useThemeToggler = () => useContext(CustomMuiThemeProviderContext);

interface ThemeToggler {
  (state: CustomTheme): CustomTheme;
}

export const toggleTheme: ThemeToggler = (state: CustomTheme) => {
  if (state.palette.mode === "dark") {
    return appDarkTheme;
  }
  return appLightTheme;
};
