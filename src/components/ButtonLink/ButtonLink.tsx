import { Button } from '@material-ui/core';
import React from 'react';

import { Link } from '../Link';

import { useStyles } from './styles';
import { IButtonLinkStyles, IButtonLinkProps } from './types';

export const ButtonLink = ({
  to,
  variant = 'default',
  linkProps,
  buttonProps,
  children,
}: IButtonLinkProps) => {
  const stylesProps: IButtonLinkStyles = { variant };
  const classes = useStyles(stylesProps);

  return (
    <Link to={to} {...linkProps}>
      <Button className={classes.root} {...buttonProps}>
        {children}
      </Button>
    </Link>
  );
};
