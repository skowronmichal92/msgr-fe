import { AuthorizedRoles, IUser } from 'graphql/types';

type UserRoles = AuthorizedRoles;

interface IUserContext extends Omit<IUser, 'id'> {
  roles: UserRoles[];
  readonly setRoles: React.Dispatch<React.SetStateAction<AuthorizedRoles[]>>;
}

export type { UserRoles, IUserContext };
