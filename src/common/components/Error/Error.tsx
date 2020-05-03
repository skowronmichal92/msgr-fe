import { Grid, Typography } from '@material-ui/core';
import { SentimentDissatisfiedOutlined } from '@material-ui/icons';
import React from 'react';

import { Container } from '../Container';

export const Error = () => {
  return (
    <Container>
      <Grid container justify="center">
        <Grid item>
          <Grid container direction="column" alignItems="center">
            <Grid item xs={12}>
              <SentimentDissatisfiedOutlined fontSize="large" />
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body1">
                Sorry, an error occurred, try reloading page
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};
