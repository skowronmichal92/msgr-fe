import React from 'react';
import { Redirect, Switch } from 'react-router-dom';

import { Home, LogIn, SignUp, User, Messages, Message } from 'modules/views';

import { PrivateRoute } from '../../components';
import { ROUTES } from '../../constants';

export const Routes = () => {
  return (
    <Switch>
      <PrivateRoute
        roles={['USER_UNAUTHORIZED']}
        exact
        path={ROUTES.signup}
        component={SignUp}
      />
      <PrivateRoute
        roles={['USER_UNAUTHORIZED']}
        exact
        path={ROUTES.login}
        component={LogIn}
      />
      <PrivateRoute
        roles={['USER_AUTHORIZED']}
        exact
        path={ROUTES.user}
        component={User}
      />
      <PrivateRoute
        roles={['USER_AUTHORIZED']}
        exact
        path={ROUTES.messages}
        component={Messages}
      />
      <PrivateRoute
        roles={['USER_AUTHORIZED']}
        exact
        path={ROUTES.message}
        component={Message}
      />
      <PrivateRoute
        roles={['USER_UNAUTHORIZED']}
        redirectPath={ROUTES.messages}
        exact
        path={ROUTES.home}
        component={Home}
      />

      <Redirect to={ROUTES.home} />
    </Switch>
  );
};
