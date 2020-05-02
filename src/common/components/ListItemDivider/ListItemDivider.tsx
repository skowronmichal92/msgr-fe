import { Divider, makeStyles } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles(({ spacing }) => ({
  root: {
    marginTop: spacing(1),
    marginBottom: spacing(1),
  },
}));

export const ListItemDivider = () => {
  const classes = useStyles();

  return <Divider component="li" classes={{ root: classes.root }} />;
};
