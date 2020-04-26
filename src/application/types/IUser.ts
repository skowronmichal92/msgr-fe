import { AuthorizedRoles } from 'graphql/types';

type UserRoles = AuthorizedRoles;

interface IUser {
  readonly roles: UserRoles[];
  readonly setRoles: React.Dispatch<React.SetStateAction<AuthorizedRoles[]>>;
}

export type { UserRoles, IUser };
