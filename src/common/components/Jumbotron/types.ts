import { ButtonTypeMap } from '@material-ui/core';

interface IJumbotronStylesProps {
  imageSrc: string;
  gradient?: string;
  textColor?: string;
  minHeight?: number;
  width?: string;
  height?: string;
  blurSize?: number;
}

interface IButtonOptions {
  text: string;
  to: string;
  variant?: ButtonTypeMap['props']['variant'];
  color?: ButtonTypeMap['props']['color'];
}

interface IJumbotronStyles
  extends Omit<Required<IJumbotronStylesProps>, 'gradient' | 'textColor'> {
  gradient: string | undefined;
  textColor: string | undefined;
}

interface IJumbotronProps extends IJumbotronStylesProps {
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  buttons?: IButtonOptions[];
}

export type { IButtonOptions, IJumbotronStyles, IJumbotronProps };
