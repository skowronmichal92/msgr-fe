import { UserRoles } from 'application/types';

import { getUserAuthorizedRoles, getUserUnauthorizedRoles } from './roles';

describe('getUserAuthorizedRoles', () => {
  it('should return array with roles containing "USER_AUTHORIZED"', () => {
    const roles: UserRoles[] = ['USER_UNAUTHORIZED'];
    const newRoles = getUserAuthorizedRoles(roles);

    expect(newRoles).toContain<UserRoles>('USER_AUTHORIZED');
    expect(newRoles).not.toContain<UserRoles>('USER_UNAUTHORIZED');
  });

  it('should throw error if roles array is already containing "USER_AUTHORIZED"', () => {
    const roles: UserRoles[] = ['USER_AUTHORIZED'];

    expect(() => {
      getUserAuthorizedRoles(roles);
    }).toThrowError();
  });
});

describe('getUserUnauthorizedRoles', () => {
  it('should return array with roles containing "USER_UNAUTHORIZED"', () => {
    const roles: UserRoles[] = ['USER_AUTHORIZED'];
    const newRoles = getUserUnauthorizedRoles(roles);

    expect(newRoles).toContain<UserRoles>('USER_UNAUTHORIZED');
    expect(newRoles).not.toContain<UserRoles>('USER_AUTHORIZED');
  });

  it('should throw error if roles array is already containing "USER_UNAUTHORIZED"', () => {
    const roles: UserRoles[] = ['USER_UNAUTHORIZED'];

    expect(() => {
      getUserUnauthorizedRoles(roles);
    }).toThrowError();
  });
});
