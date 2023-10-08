// ThemeProvider.tsx
"use client";
import React, { useState, useEffect } from "react";
import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { appLightTheme, appDarkTheme, CustomMuiThemeProviderContext, CustomTheme } from "./CustomMuiThemeProvider.constants";
import { useThemeToggler, toggleTheme } from "./CustomMuiThemeProvider.utils";

interface IProps {
  children: React.ReactNode;
  defaultThemeMode: "dark" | "light"; 
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
  const [currentTheme, setCurrentTheme] = useState(
    defaultThemeMode === "dark" ? appLightTheme : appDarkTheme
  );

  const themeToggler = useThemeToggler();

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

  useEffect(() => {
    setCurrentTheme(defaultThemeMode === "dark" ? appLightTheme : appDarkTheme);
  }, [defaultThemeMode]);

  const handleToggleTheme = () => {
    const newTheme = toggleTheme(currentTheme);
    setCurrentTheme(newTheme);
    themeToggler(newTheme);
  };

  return (
    <CustomMuiThemeProviderContext.Provider value={handleToggleTheme as never}>
      <MuiThemeProvider
        theme={currentTheme === appLightTheme ? customLightTheme : customDarkTheme}
      >
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    </CustomMuiThemeProviderContext.Provider>
  );
};
