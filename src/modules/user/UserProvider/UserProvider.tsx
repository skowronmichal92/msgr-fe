import { useQuery } from '@apollo/react-hooks';
import React, { useState } from 'react';

import { UserContext } from 'application/context';
import { IUserContext, UserRoles } from 'application/types';
import { Loader, Error } from 'common/components';
import { USER_QUERY } from 'graphql/queries';
import { IUserResponse, IUserInput } from 'graphql/types';

interface IUserProvider {
  children: React.ReactNode;
}

export const UserProvider = ({ children }: IUserProvider) => {
  const [roles, setRoles] = useState<UserRoles[]>(['USER_AUTHORIZED']);
  const { loading, error, data } = useQuery<IUserResponse, IUserInput>(
    USER_QUERY,
    {
      variables: {
        id: '0',
      },
    }
  );

  if (loading) {
    return <Loader />;
  }

  if (error || !data) {
    return <Error />;
  }

  const { name, user: userEmail, avatar } = data.user;
  const user: IUserContext = { roles, name, user: userEmail, avatar, setRoles };

  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};
