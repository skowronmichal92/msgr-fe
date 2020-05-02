import { ListItem, ListItemProps, makeStyles } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles(() => ({
  disabled: {
    // TODO remove important or fix tab index on simple list item
    opacity: '1!important',
  },
}));

interface IMenuItemTextProps extends Omit<ListItemProps, 'button'> {
  children: React.ReactNode;
}

export const MenuItemText = ({
  children,
  ...menuItemProps
}: IMenuItemTextProps) => {
  const classes = useStyles();

  return (
    <ListItem
      disabled
      classes={{ disabled: classes.disabled }}
      {...menuItemProps}
    >
      {children}
    </ListItem>
  );
};
