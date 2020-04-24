import { Field } from 'formik';
import { TextField } from 'formik-material-ui';
import React from 'react';

import { SimpleIcon, ClickableIcon } from './components';
import { IInputProps } from './types';

// TODO overload with click callbacks to require icons
export const Input = ({
  iconLeft: IconLeft,
  iconRight: IconRight,
  onIconRightClick,
  ...textFieldProps
}: IInputProps) => {
  const {
    InputLabelProps,
    InputProps,
    ...otherTextFieldProps
  } = textFieldProps;

  return (
    <Field
      fullWidth
      variant="outlined"
      margin="dense"
      InputProps={{
        startAdornment: IconLeft && <SimpleIcon icon={IconLeft} />,
        endAdornment: IconRight && (
          <>
            {onIconRightClick ? (
              <ClickableIcon
                icon={IconRight}
                onIconClick={onIconRightClick}
                position="end"
              />
            ) : (
              <SimpleIcon icon={IconRight} position="end" />
            )}
          </>
        ),
        ...InputProps,
      }}
      InputLabelProps={{ shrink: true, ...InputLabelProps }}
      component={TextField}
      {...otherTextFieldProps}
    />
  );
};
