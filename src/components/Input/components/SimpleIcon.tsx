import {
  InputAdornment,
  InputAdornmentTypeMap,
  SvgIcon,
} from '@material-ui/core';
import React from 'react';

interface ISimpleIcon {
  icon: typeof SvgIcon;
  position?: InputAdornmentTypeMap['props']['position'];
}

export const SimpleIcon = ({ icon: Icon, position = 'start' }: ISimpleIcon) => {
  return (
    <InputAdornment position={position}>
      <Icon />
    </InputAdornment>
  );
};
