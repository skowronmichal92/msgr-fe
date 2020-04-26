import React, { useState } from 'react';

import { UserContext } from 'application/context';
import { IUser, UserRoles } from 'application/types';

interface IUserProvider {
  children: React.ReactNode;
}

export const UserProvider = ({ children }: IUserProvider) => {
  const [roles, setRoles] = useState<UserRoles[]>(['USER_UNAUTHORIZED']);
  const user: IUser = { roles, setRoles };

  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};
