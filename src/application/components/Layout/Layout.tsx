import React from 'react';
import { Grid } from '@material-ui/core';

interface ILayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: ILayoutProps) => {
  return <Grid>{children}</Grid>;
};
