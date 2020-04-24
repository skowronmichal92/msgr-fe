import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

import { useStyles } from './styles';
import { ILinkProps, ILinkStyles } from './types';

export const Link = ({
  to,
  variant = 'default',
  children,
  ...linkProps
}: ILinkProps) => {
  const stylesProps: ILinkStyles = { variant };
  const classes = useStyles(stylesProps);

  return (
    <RouterLink to={to} className={classes.root} {...linkProps}>
      {children}
    </RouterLink>
  );
};
