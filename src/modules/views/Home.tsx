import { Grid, Box, useTheme } from '@material-ui/core';
import React from 'react';

import { GIRL_PHONE_IMAGE } from 'assets/images';
import { LINKS_PROPS } from 'common/constants';
import { Jumbotron } from 'components';
import { hexToRgba } from 'utils';

export const Home = () => {
  const { palette } = useTheme();

  const rgbaPrimary = hexToRgba(palette.primary.main, 0.75);
  const rgbaSecondary = hexToRgba(palette.secondary.main, 0.75);

  return (
    <Box clone height="100%">
      <Grid container>
        <Grid item xs={12}>
          <Jumbotron
            imageSrc={GIRL_PHONE_IMAGE}
            gradient={`linear-gradient(135deg, ${rgbaPrimary} 0%, ${rgbaSecondary} 100%)`}
            textColor={palette.common.white}
            width="100vw"
            height="100%"
            // blurSize={3}
            title="msgr.io"
            subtitle="Join us and exchange messages with your fiends!"
            buttons={[
              {
                text: LINKS_PROPS.login.text,
                to: LINKS_PROPS.login.to,
                color: 'secondary',
              },
              { text: LINKS_PROPS.signup.text, to: LINKS_PROPS.signup.to },
            ]}
          />
        </Grid>
      </Grid>
    </Box>
  );
};
