import React from 'react';

import { Layout, Routes } from '../';
import './styles.css';

export const App = () => {
  return (
    <React.StrictMode>
      <Layout>
        <Routes />
      </Layout>
    </React.StrictMode>
  );
};
