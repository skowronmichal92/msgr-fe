import { ApolloProvider } from '@apollo/react-hooks';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { client } from 'graphql/client';

import { Routes } from '../../navigation';
import { UserProvider } from '../../user';
import { Layout } from '../Layout';
import { StylesProvider } from '../StylesProvider';

export const App = () => {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <ApolloProvider client={client}>
          <StylesProvider>
            <UserProvider>
              <Layout>
                <Routes />
              </Layout>
            </UserProvider>
          </StylesProvider>
        </ApolloProvider>
      </BrowserRouter>
    </React.StrictMode>
  );
};
