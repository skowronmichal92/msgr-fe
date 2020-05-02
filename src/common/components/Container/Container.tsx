import { Box, Grid, useTheme, useMediaQuery } from '@material-ui/core';
import React from 'react';

interface IContainerProps {
  children: React.ReactNode;
}

export const Container = ({ children }: IContainerProps) => {
  const theme = useTheme();
  const isSmPage = useMediaQuery(theme.breakpoints.up('sm'));

  return (
    <Box clone py={isSmPage ? 6 : 4} px={2}>
      <Grid container>
        <Grid item xs={12}>
          {children}
        </Grid>
      </Grid>
    </Box>
  );
};
