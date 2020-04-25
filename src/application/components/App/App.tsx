import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { Layout, Routes, UserProvider } from '..';

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
