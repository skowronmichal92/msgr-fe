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
import { useLocation } from 'react-router-dom';

import { ROUTES } from 'application/constants';
import { ButtonLink, Link } from 'common/components';
import { LINKS_PROPS } from 'common/constants';

import { UserDropdown } from '../UserDropdown';

const LOGIN_ALLOWED_ROUTES = [ROUTES.home, ROUTES.signup];
const SIGNUP_ALLOWED_ROUTES = [ROUTES.home, ROUTES.login];
const USER_DROPDOWN_ALLOWED_ROUTES = [
  ROUTES.user,
  ROUTES.messages,
  ROUTES.message,
];

export const Navbar = () => {
  const { pathname } = useLocation();

  const showSignupButton = SIGNUP_ALLOWED_ROUTES.includes(pathname);
  const showLoginButton = LOGIN_ALLOWED_ROUTES.includes(pathname);
  const showUserDropdown = USER_DROPDOWN_ALLOWED_ROUTES.includes(pathname);

  return (
    <AppBar position="static">
      <Container>
        <Toolbar disableGutters>
          <Grid container justify="space-between" alignItems="center">
            <Grid item>
              <Link to={ROUTES.home} variant="white">
                <Box clone py={0.5} px={2}>
                  <Grid
                    container
                    component="span"
                    alignItems="center"
                    wrap="nowrap"
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
              <Grid container alignItems="center" spacing={1}>
                {showSignupButton && (
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
                )}

                {showLoginButton && (
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
                )}

                {showUserDropdown && (
                  <Grid item>
                    <UserDropdown />
                  </Grid>
                )}
              </Grid>
            </Grid>
          </Grid>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
