import { ButtonProps } from '@material-ui/core';

import { ILinkProps } from '../Link';

type Variant = 'default' | 'white';

interface IButtonLinkStylesProps {
  variant?: Variant;
}

type IButtonLinkStyles = Required<IButtonLinkStylesProps>;

interface IButtonLinkProps
  extends IButtonLinkStylesProps,
    Pick<ILinkProps, 'to'> {
  children: React.ReactNode;
  buttonProps?: ButtonProps;
  linkProps?: Omit<ILinkProps, 'to' | 'children'>;
}

export type { IButtonLinkProps, IButtonLinkStyles, Variant };
