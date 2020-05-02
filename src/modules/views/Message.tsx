import { Grid, Typography } from '@material-ui/core';
import React from 'react';

export const Message = () => {
  return (
    <Grid container>
      <Grid item xs={12}>
        <Typography variant="body1">Message</Typography>
      </Grid>
    </Grid>
  );
};
