// eslint-disable-next-line
import ApolloClient from 'apollo-boost';

export const client = new ApolloClient({
  uri: 'http://localhost:9000/graphql',
});
