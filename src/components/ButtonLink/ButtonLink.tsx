import React from 'react';
import { Link, LinkProps as RouterLinkProps } from 'react-router-dom';
import { Button, ButtonProps, makeStyles } from '@material-ui/core';

type LinkProps = Omit<
  React.PropsWithoutRef<RouterLinkProps> &
    React.RefAttributes<HTMLAnchorElement>,
  'to'
>;

interface IButtonLinkProps {
  to: string;
  children: React.ReactNode;
  linkProps?: LinkProps;
  buttonProps?: ButtonProps;
}

const useStyles = makeStyles(() => ({
  link: {
    textDecoration: 'none',
  },
}));

export const ButtonLink = ({
  to,
  linkProps,
  buttonProps,
  children,
}: IButtonLinkProps) => {
  const classes = useStyles();

  return (
    <Link to={to} className={classes.link} {...linkProps}>
      <Button {...buttonProps}>{children}</Button>
    </Link>
  );
};
