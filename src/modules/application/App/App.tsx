import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { Routes } from '../../navigation';
import { UserProvider } from '../../user';
import { Layout } from '../Layout';

export const App = () => {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <UserProvider>
          <Layout>
            <Routes />
          </Layout>
        </UserProvider>
      </BrowserRouter>
    </React.StrictMode>
  );
};
