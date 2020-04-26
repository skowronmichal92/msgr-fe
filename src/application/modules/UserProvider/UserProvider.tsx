import React from 'react';

import { UserContext } from '../../context';
import { IUser } from '../../types';

interface IUserProvider {
  children: React.ReactNode;
}

export const UserProvider = ({ children }: IUserProvider) => {
  const user: IUser = { roles: ['USER_UNAUTHORIZED'] };

  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};
