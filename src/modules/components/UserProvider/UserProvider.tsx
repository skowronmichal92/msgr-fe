import React from 'react';

import { UserContext } from 'application/context';
import { IUser } from 'application/types';

interface IUserProvider {
  children: React.ReactNode;
}

export const UserProvider = ({ children }: IUserProvider) => {
  const user: IUser = { roles: ['USER_UNAUTHORIZED'] };

  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};
