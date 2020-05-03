import { Grid, CircularProgress } from '@material-ui/core';
import React from 'react';

import { Container } from '../Container';

export const Loader = () => {
  return (
    <Container>
      <Grid container justify="center">
        <Grid item>
          <CircularProgress color="secondary" />
        </Grid>
      </Grid>
    </Container>
  );
};
