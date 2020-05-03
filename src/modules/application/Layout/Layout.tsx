import { Grid, Box, useMediaQuery, useTheme } from '@material-ui/core';
import React from 'react';

import { Navbar } from '../../navigation';

interface ILayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: ILayoutProps) => {
  const theme = useTheme();
  const isSmPage = useMediaQuery(theme.breakpoints.up('sm'));

  return (
    <>
      <Navbar />
      <Box clone height={`calc(100vh - ${isSmPage ? 64 : 56}px)`}>
        <Grid component="main">{children}</Grid>
      </Box>
    </>
  );
};
