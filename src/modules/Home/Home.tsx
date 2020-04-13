import React from 'react';
import { Grid, useTheme } from '@material-ui/core';

import { ROUTES } from 'application/utils';
import { GIRL_PHONE_IMAGE } from 'assets/images';
import { Jumbotron } from 'components';
import { hexToRgba } from 'utils';

export const Home = () => {
  const theme = useTheme();

  const rgbaPrimary = hexToRgba(theme.palette.primary.main, 0.75);
  const rgbaSecondary = hexToRgba(theme.palette.secondary.main, 0.75);

  return (
    <Grid container>
      <Grid item xs={12}>
        <Jumbotron
          imageSrc={GIRL_PHONE_IMAGE}
          gradient={`linear-gradient(135deg, ${rgbaPrimary} 0%, ${rgbaSecondary} 100%)`}
          textColor="white"
          height="100vh"
          blurSize={3}
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
