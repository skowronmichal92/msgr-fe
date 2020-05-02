// TODO update mui to fix findDOMNode error
import {
  Avatar,
  Menu,
  MenuItem,
  IconButton,
  Grid,
  useTheme,
} from '@material-ui/core';
import { ArrowDropDown } from '@material-ui/icons';
import React, { useState, useRef, useContext } from 'react';

import { ROUTES } from 'application/constants';
import { UserContext } from 'application/context';
import { getUserUnauthorizedRoles } from 'application/utils';
import { Link, ListItemDivider, MenuItemText } from 'common/components';

export const UserDropdown = () => {
  const [open, setOpen] = useState(false);
  const { name, user, avatar, roles, setRoles } = useContext(UserContext);
  const avatarRef = useRef(null);
  const theme = useTheme();

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
        <MenuItemText dense disabled>
          <strong>{name}</strong>
        </MenuItemText>
        <MenuItemText dense disabled>
          {user}
        </MenuItemText>
        <ListItemDivider />
        <MenuItem dense>
          <Link to={ROUTES.messages} fullWidth>
            Messages
          </Link>
        </MenuItem>
        <ListItemDivider />
        <MenuItem dense>
          <Link to={ROUTES.user} fullWidth>
            Profile
          </Link>
        </MenuItem>
        <MenuItem dense>
          <Link to={ROUTES.settings} fullWidth>
            Settings
          </Link>
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
            <Avatar src={avatar} alt={name} />
          </Grid>
          <Grid item>
            <ArrowDropDown htmlColor={theme.palette.common.white} />
          </Grid>
        </Grid>
      </IconButton>
    </>
  );
};
