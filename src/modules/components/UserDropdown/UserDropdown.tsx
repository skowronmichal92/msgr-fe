import { Avatar, Menu, MenuItem, IconButton, Grid } from '@material-ui/core';
import { AccountCircle, ArrowDropDown } from '@material-ui/icons';
import React, { useState, useRef, useContext } from 'react';

import { ROUTES } from 'application/constants';
import { UserContext } from 'application/context';
import { getUserUnauthorizedRoles } from 'application/utils';
import { Link } from 'common/components';

export const UserDropdown = () => {
  const [open, setOpen] = useState(false);
  const { roles, setRoles } = useContext(UserContext);
  const avatarRef = useRef(null);

  return (
    <>
      <Menu
        open={open}
        anchorEl={avatarRef.current}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        getContentAnchorEl={null}
        onClose={() => setOpen(false)}
      >
        <MenuItem dense>
          <Link to={ROUTES.messages}>Messages</Link>
        </MenuItem>
        <MenuItem dense>
          <Link to={ROUTES.user}>Settings</Link>
        </MenuItem>
        <MenuItem
          dense
          onClick={() => {
            setTimeout(() => {
              const newRoles = getUserUnauthorizedRoles(roles);
              setRoles(newRoles);
            }, 500);
          }}
        >
          Log out
        </MenuItem>
      </Menu>
      <IconButton
        ref={avatarRef}
        size="small"
        onClick={() => setOpen(true)}
        disableRipple
        disableFocusRipple
        disableTouchRipple
      >
        <Grid container wrap="nowrap" alignItems="center">
          <Grid item>
            <Avatar>
              <AccountCircle />
            </Avatar>
          </Grid>
          <Grid item>
            <ArrowDropDown />
          </Grid>
        </Grid>
      </IconButton>
    </>
  );
};
