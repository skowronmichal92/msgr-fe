import { AuthorizedRoles } from 'graphql/types';

type UserRoles = AuthorizedRoles;

interface IUser {
  name: string;
  user: string;
  roles: UserRoles[];
  readonly setRoles: React.Dispatch<React.SetStateAction<AuthorizedRoles[]>>;
  avatar?: string;
}

export type { UserRoles, IUser };
