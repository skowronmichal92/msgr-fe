import { gql } from 'apollo-boost';

export const USER_QUERY = gql`
  query UserQuery($id: ID!) {
    user(id: $id) {
      name
      user
      avatar
    }
  }
`;
