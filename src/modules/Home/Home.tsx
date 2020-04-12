import React from 'react';
import { Grid } from '@material-ui/core';

import { JUMBOTRON_IMAGE } from 'assets/images';
import { ROUTES } from 'application/utils';
import { Jumbotron } from 'components';

export const Home = () => {
  return (
    <Grid container>
      <Grid item xs={12}>
        <Jumbotron
          imageSrc={JUMBOTRON_IMAGE}
          title="msgr.io"
          subtitle="Join us and exchange messages with your fiends!"
          buttons={[
            { text: 'Log in', to: ROUTES.login, color: 'secondary' },
            { text: 'Sign Up', to: ROUTES.signup },
          ]}
        />
      </Grid>
    </Grid>
  );
};
