import { ButtonTypeMap } from '@material-ui/core';

export interface IButtonOptions {
  text: string;
  to: string;
  variant?: ButtonTypeMap['props']['variant'];
  color?: ButtonTypeMap['props']['color'];
}

interface IJumbotronStylesProps {
  imageSrc: string;
  gradient?: string;
  textColor?: string;
  minHeight?: number;
  width?: string;
  height?: string;
  blurSize?: number;
}

export interface IJumbotronStyles
  extends Omit<Required<IJumbotronStylesProps>, 'gradient' | 'textColor'> {
  gradient: string | undefined;
  textColor: string | undefined;
}

export interface IJumbotronProps extends IJumbotronStylesProps {
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  buttons?: IButtonOptions[];
}
