import { LinkProps as RouterLinkProps } from 'react-router-dom';

type Variant = 'default' | 'white';

type LinkProps = Omit<
  React.PropsWithoutRef<RouterLinkProps> &
    React.RefAttributes<HTMLAnchorElement>,
  'to'
>;

interface ILinkStylesProps {
  variant?: Variant;
  fullWidth?: boolean;
}

type ILinkStyles = Required<ILinkStylesProps>;

interface ILinkProps extends LinkProps, ILinkStylesProps {
  to: string;
  children: React.ReactNode;
}

export type { Variant, ILinkProps, ILinkStyles };
