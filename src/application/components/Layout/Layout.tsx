import { Grid, CssBaseline, ThemeProvider } from '@material-ui/core';
import React from 'react';

import { defaultTheme } from '../../themes';

interface ILayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: ILayoutProps) => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline>
        <Grid>{children}</Grid>
      </CssBaseline>
    </ThemeProvider>
  );
};
