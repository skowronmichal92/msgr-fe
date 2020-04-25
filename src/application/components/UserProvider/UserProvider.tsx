import React from 'react';

import { IUser } from 'types/graphql';

import { UserContext } from './context';

interface IUserProvider {
  children: React.ReactNode;
}

export const UserProvider = ({ children }: IUserProvider) => {
  const user: IUser = { roles: ['USER_UNAUTHORIZED'] };

  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};
