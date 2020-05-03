import { createContext } from 'react';

import { IUserContext } from '../types';

export const UserContext = createContext<IUserContext>({
  name: '-',
  user: '-',
  roles: [],
  setRoles: () => undefined,
});
