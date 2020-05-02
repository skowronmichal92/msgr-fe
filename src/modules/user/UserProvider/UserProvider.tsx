import React, { useState } from 'react';

import { userData } from '_db';
import { UserContext } from 'application/context';
import { IUser, UserRoles } from 'application/types';

interface IUserProvider {
  children: React.ReactNode;
}

export const UserProvider = ({ children }: IUserProvider) => {
  const [roles, setRoles] = useState<UserRoles[]>(['USER_AUTHORIZED']);
  const { name, user: userEmail, avatar } = userData.user;

  const user: IUser = { roles, name, user: userEmail, avatar, setRoles };

  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};
