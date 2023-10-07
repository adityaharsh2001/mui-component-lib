// ThemeProvider.tsx
"use client";
import React, { useReducer } from "react";
import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import {
  appLightTheme,
  appDarkTheme,
  CustomMuiThemeProviderContext,
  CustomTheme,
} from "./CustomMuiThemeProvider.constants";
import { toggleTheme } from "./CustomMuiThemeProvider.utils";

interface IProps {
  children: React.ReactNode;
  defaultThemeMode: "dark" | "light"; // Accept "light" or "dark" as the default theme mode
  customLightColors?: object;
  customDarkColors?: object;
  palette?: object;
  typography?: object;
}

export const CustomMuiThemeProvider: React.FC<IProps> = ({
  children,
  defaultThemeMode,
  customLightColors,
  customDarkColors,
  palette,
  typography,
}) => {
  // Determine the initial theme based on the defaultThemeMode prop
  const initialTheme =
    defaultThemeMode === "dark" ? appLightTheme : appDarkTheme;

  const [currentTheme, dispatch] = useReducer(toggleTheme, initialTheme);

  // Merge custom colors with the themes
  const customLightTheme = {
    ...appLightTheme,
    palette: {
      ...appLightTheme.palette,
      ...customLightColors,
    },
  } as CustomTheme;

  const customDarkTheme = {
    ...appDarkTheme,
    palette: {
      ...appDarkTheme.palette,
      ...customDarkColors,
    },
  } as CustomTheme;

  if (palette) {
    customLightTheme.palette = {
      ...customLightTheme.palette,
      ...palette,
    };

    customDarkTheme.palette = {
      ...customDarkTheme.palette,
      ...palette,
    };
  }

  if (typography) {
    customLightTheme.typography = {
      ...customLightTheme.typography,
      ...typography,
    };

    customDarkTheme.typography = {
      ...customDarkTheme.typography,
      ...typography,
    };
  }

  return (
    <CustomMuiThemeProviderContext.Provider value={dispatch as never}>
      <MuiThemeProvider
        theme={
          currentTheme === appLightTheme ? customLightTheme : customDarkTheme
        }>
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    </CustomMuiThemeProviderContext.Provider>
  );
};
