import { Grid, Typography, Avatar, Box } from '@material-ui/core';
import React, { useContext } from 'react';

import { UserContext } from 'application/context';
import { Container } from 'common/components';

export const User = () => {
  const { avatar, user, name } = useContext(UserContext);

  return (
    <Container>
      <Grid container>
        <Grid item xs={12}>
          <Typography variant="h4" align="center">
            {name}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body2" align="center">
            {user}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Grid container justify="center">
            <Grid item>
              <Box clone width={200} height={200} marginTop={4}>
                <Avatar src={avatar} alt={name} />
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};
