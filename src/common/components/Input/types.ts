import {
  TextFieldProps,
  InputProps,
  InputLabelProps,
  SvgIcon,
} from '@material-ui/core';

type InputLabelCustomTextFieldProps = Omit<
  TextFieldProps,
  | 'label'
  | 'placeholder'
  | 'fullWidth'
  | 'variant'
  | 'margin'
  | 'InputProps'
  | 'InputLabelProps'
  | 'component'
>;

type InputTextFieldProps =
  | Omit<InputProps, 'startAdornment' | 'endAdornment'>
  | undefined;

type InputLabelTextFieldProps = Omit<InputLabelProps, 'shrink'> | undefined;

export interface IInputProps extends InputLabelCustomTextFieldProps {
  label: React.ReactNode;
  placeholder: string;
  InputProps?: InputTextFieldProps;
  InputLabelProps?: InputLabelTextFieldProps;
  iconLeft?: typeof SvgIcon;
  iconRight?: typeof SvgIcon;
  onIconRightClick?: () => void;
}
