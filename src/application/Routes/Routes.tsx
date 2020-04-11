import React from 'react';
import { BrowserRouter, Redirect, Switch, Route } from 'react-router-dom';

import { Home, LogIn, SignUp } from '../../modules';

export const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/login" component={LogIn} />
        <Route exact path="/" component={Home} />

        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  );
};
