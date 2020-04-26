import {
  Box,
  InputAdornment,
  InputAdornmentTypeMap,
  IconButton,
  SvgIcon,
} from '@material-ui/core';
import React from 'react';

interface IClickableIcon {
  icon: typeof SvgIcon;
  onIconClick: () => void;
  position?: InputAdornmentTypeMap['props']['position'];
}

export const ClickableIcon = ({
  icon: Icon,
  onIconClick,
  position = 'start',
}: IClickableIcon) => {
  return (
    <Box clone mr={-1.5}>
      <InputAdornment position={position}>
        <IconButton onClick={onIconClick}>
          <Icon />
        </IconButton>
      </InputAdornment>
    </Box>
  );
};
