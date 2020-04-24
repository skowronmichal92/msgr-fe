import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { Layout, Routes } from '..';

export const App = () => {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <Layout>
          <Routes />
        </Layout>
      </BrowserRouter>
    </React.StrictMode>
  );
};
