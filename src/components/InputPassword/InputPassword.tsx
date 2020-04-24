import {
  LockOutlined,
  VisibilityOutlined,
  VisibilityOffOutlined,
} from '@material-ui/icons';
import React, { useState } from 'react';

import { Input } from 'components';

import { IInputProps } from '../Input';

type IInputPasswordProps = Omit<
  IInputProps,
  'type' | 'iconLeft' | 'iconRight' | 'onIconRightClick'
>;

export const InputPassword = ({ ...inputProps }: IInputPasswordProps) => {
  const [passwordInvisible, setPasswordInvisible] = useState(true);
  return (
    <Input
      type={passwordInvisible ? 'password' : 'text'}
      iconLeft={LockOutlined}
      iconRight={passwordInvisible ? VisibilityOutlined : VisibilityOffOutlined}
      onIconRightClick={() => {
        setPasswordInvisible((prevPasswordInvisible) => !prevPasswordInvisible);
      }}
      {...inputProps}
    />
  );
};
