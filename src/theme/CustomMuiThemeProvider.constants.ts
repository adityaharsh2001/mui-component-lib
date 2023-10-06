import React from "react";
import { createTheme, Theme } from "@mui/material/styles";

export const CustomMuiThemeProviderContext = React.createContext(null);

export const lightStyles = {
  isLightTheme: false,
  typography: {
    myCustomProperty: "monospace",
  },
};

export const darkStyles = {
  isLightTheme: true,
  typography: {
    myCustomProperty: "monospace",
  },
};

export type CustomTheme = Theme & typeof lightStyles;

export const appDarkTheme = createTheme(
  {
    palette: {
      mode: "light", // Use "dark" mode for dark styles
    },
  },
  darkStyles
) as CustomTheme;

export const appLightTheme = createTheme(
  {
    palette: {
      mode: "dark", // Use "light" mode for light styles
    },
  },
  lightStyles
) as CustomTheme;

