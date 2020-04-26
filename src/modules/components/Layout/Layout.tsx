import {
  Grid,
  Box,
  CssBaseline,
  ThemeProvider,
  useMediaQuery,
  useTheme,
  Theme,
} from '@material-ui/core';
import React from 'react';

import { defaultTheme } from 'application/themes';

import { Navbar } from '../Navbar';

interface ILayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: ILayoutProps) => {
  const { breakpoints } = useTheme<Theme>();
  const isSmPage = useMediaQuery(breakpoints.up('sm'));

  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline>
        <Navbar />
        <Box clone height={`calc(100vh - ${isSmPage ? 64 : 56}px)`}>
          <Grid component="main">{children}</Grid>
        </Box>
      </CssBaseline>
    </ThemeProvider>
  );
};
