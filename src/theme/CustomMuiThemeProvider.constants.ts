import React from "react";
import { createTheme, Theme } from "@mui/material/styles";

export const CustomMuiThemeProviderContext = React.createContext(null as any);

export const lightStyles = {
  isLightTheme: true,
  typography: {
    myCustomProperty: "monospace",
  },
};

export const darkStyles = {
  isLightTheme: false,
  typography: {
    myCustomProperty: "monospace",
  },
};

export type CustomTheme = Theme & typeof lightStyles;

export const appLightTheme = createTheme(
  {
    palette: {
      mode: "dark",
    },
  },
  lightStyles
) as CustomTheme;

export const appDarkTheme = createTheme(
  {
    palette: {
      mode: "light",
    },
  },
  lightStyles,
  darkStyles
) as CustomTheme;
