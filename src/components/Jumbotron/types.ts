import { ButtonTypeMap } from '@material-ui/core';

export interface IButtonOptions {
  text: string;
  to: string;
  variant?: ButtonTypeMap['props']['variant'];
  color?: ButtonTypeMap['props']['color'];
}

export interface IJumbotronStyles {
  imageSrc: string;
  gradient?: string;
  textColor?: string;
  minHeight?: number;
  blurSize?: number;
}

export interface IJumbotronProps extends IJumbotronStyles {
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  buttons?: IButtonOptions[];
}
