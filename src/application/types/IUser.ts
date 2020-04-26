import { AuthorizedRoles } from 'graphql/types';

type UserRoles = AuthorizedRoles;

interface IUser {
  roles: UserRoles[];
}

export type { UserRoles, IUser };
