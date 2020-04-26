import { UserRoles } from '../types';

const getUserAuthorizedRoles = (roles: UserRoles[]): UserRoles[] => {
  if (roles.includes('USER_AUTHORIZED')) {
    throw new Error('user already authorized');
  }
  const filteredRoles = roles.filter((role) => role !== 'USER_UNAUTHORIZED');
  return [...filteredRoles, 'USER_AUTHORIZED'];
};

const getUserUnauthorizedRoles = (roles: UserRoles[]): UserRoles[] => {
  if (roles.includes('USER_UNAUTHORIZED')) {
    throw new Error('user already unauthorized');
  }
  const filteredRoles = roles.filter((role) => role !== 'USER_AUTHORIZED');
  return [...filteredRoles, 'USER_UNAUTHORIZED'];
};

export { getUserAuthorizedRoles, getUserUnauthorizedRoles };
