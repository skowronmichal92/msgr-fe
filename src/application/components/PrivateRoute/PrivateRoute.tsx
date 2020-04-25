import React, { useContext } from 'react';
import { Route, RouteProps, Redirect } from 'react-router-dom';

import { UserRoles } from 'types/graphql';

import { ROUTES } from '../../constants';
import { UserContext } from '../UserProvider';

interface IPrivateRouteProps extends RouteProps {
  roles: UserRoles[];
  redirectPath?: string;
}

export const PrivateRoute = ({
  roles,
  redirectPath = ROUTES.home,
  ...routeProps
}: IPrivateRouteProps) => {
  const { roles: userRoles } = useContext(UserContext);
  const routeAllowed = userRoles.some((role) => roles.includes(role));

  return routeAllowed ? (
    <Route {...routeProps} />
  ) : (
    <Redirect to={redirectPath} />
  );
};
