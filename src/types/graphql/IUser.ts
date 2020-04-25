type AuthorizedRoles = 'USER_AUTHORIZED' | 'USER_UNAUTHORIZED';

type UserRoles = AuthorizedRoles;

interface IUser {
  roles: UserRoles[];
}

export type { UserRoles, IUser };
