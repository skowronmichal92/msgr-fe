import React from 'react';
import { Redirect, Switch, Route } from 'react-router-dom';

import { Home, LogIn, SignUp, User, Messages, Message } from 'modules/views';

import { ROUTES } from '../../constants';

export const Routes = () => {
  return (
    <Switch>
      <Route exact path={ROUTES.signup} component={SignUp} />
      <Route exact path={ROUTES.login} component={LogIn} />
      <Route exact path={ROUTES.user} component={User} />
      <Route exact path={ROUTES.messages} component={Messages} />
      <Route exact path={ROUTES.message} component={Message} />
      <Route exact path={ROUTES.home} component={Home} />

      <Redirect to={ROUTES.home} />
    </Switch>
  );
};
