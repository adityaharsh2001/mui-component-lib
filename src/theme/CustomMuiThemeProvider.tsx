import React, { useReducer } from "react";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from '@mui/material/CssBaseline';
import { appLightTheme,  CustomMuiThemeProviderContext } from "./CustomMuiThemeProvider.constants";
import { toggleTheme } from "./CustomMuiThemeProvider.utils";

interface IProps {
    children: React.ReactNode;
    
}

export const CustomMuiThemeProvider: React.FC<IProps> = props => {
  const [currentTheme, dispatch] = useReducer(toggleTheme, appLightTheme);

  return ( 
    <CustomMuiThemeProviderContext.Provider value={dispatch as unknown}>
      <ThemeProvider theme={currentTheme}>
        <CssBaseline />
        {props.children}
      </ThemeProvider>
    </CustomMuiThemeProviderContext.Provider>
  );
};

CustomMuiThemeProvider.displayName = "CustomMuiThemeProvider";
CustomMuiThemeProvider.defaultProps = {};
