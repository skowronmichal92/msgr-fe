import {
  AppBar,
  Toolbar,
  Typography,
  Grid,
  Box,
  Container,
} from '@material-ui/core';
import { ChatOutlined } from '@material-ui/icons';
import React from 'react';

import { ROUTES } from 'application/constants';
import { LINKS_PROPS } from 'common/constants';
import { ButtonLink, Link } from 'components';

export const Navbar = () => {
  return (
    <AppBar position="static">
      <Container>
        <Toolbar>
          <Grid container justify="space-between" alignItems="center">
            <Grid item>
              <Link to={ROUTES.home} variant="white">
                <Box clone py={0.5} px={2}>
                  <Grid
                    container
                    component="span"
                    alignItems="center"
                    spacing={1}
                  >
                    <Grid item component="span">
                      <ChatOutlined />
                    </Grid>
                    <Grid item component="span">
                      <Typography variant="caption">msgr</Typography>
                    </Grid>
                  </Grid>
                </Box>
              </Link>
            </Grid>

            <Grid item>
              <Grid container spacing={1}>
                <Grid item>
                  <ButtonLink
                    to={LINKS_PROPS.signup.to}
                    variant="white"
                    buttonProps={{
                      size: 'small',
                    }}
                  >
                    {LINKS_PROPS.signup.text}
                  </ButtonLink>
                </Grid>

                <Grid item>
                  <ButtonLink
                    to={LINKS_PROPS.login.to}
                    variant="white"
                    buttonProps={{
                      variant: 'outlined',
                      size: 'small',
                    }}
                  >
                    {LINKS_PROPS.login.text}
                  </ButtonLink>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
