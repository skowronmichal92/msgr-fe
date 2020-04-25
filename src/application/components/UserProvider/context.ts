import { createContext } from 'react';

import { IUser } from 'types/graphql';

export const UserContext = createContext<IUser>({
  roles: [],
});
