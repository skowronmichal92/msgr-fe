import { createContext } from 'react';

import { IUser } from '../types';

export const UserContext = createContext<IUser>({
  roles: [],
});
