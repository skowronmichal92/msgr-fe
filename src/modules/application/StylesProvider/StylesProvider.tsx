import { CssBaseline, ThemeProvider } from '@material-ui/core';
import React from 'react';

import { defaultTheme } from 'application/themes';

interface IStylesProviderProps {
  children: React.ReactNode;
}

export const StylesProvider = ({ children }: IStylesProviderProps) => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline>{children}</CssBaseline>
    </ThemeProvider>
  );
};
