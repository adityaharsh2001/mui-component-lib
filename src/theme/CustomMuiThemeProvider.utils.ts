import { useContext } from "react";
import {
  appDarkTheme,
  appLightTheme,
  CustomMuiThemeProviderContext,
  CustomTheme
} from "./CustomMuiThemeProvider.constants";

export const useThemeToggler = () => useContext(CustomMuiThemeProviderContext);

export const toggleTheme = (
  state: CustomTheme,
  // action: string
): CustomTheme => {
  if (state.palette.mode === "dark") {
    return appDarkTheme;
  }
  return appLightTheme;
};
