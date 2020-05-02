import { makeStyles } from '@material-ui/core';
import { CSSProperties } from 'react';

import { ILinkStyles, Variant } from './types';

export const useStyles = makeStyles(({ palette }) => ({
  root: ({ variant, fullWidth }: ILinkStyles) => {
    const variants: Record<Variant, CSSProperties> = {
      default: {
        color: 'inherit',
      },
      white: {
        color: palette.common.white,
      },
    };

    return {
      textDecoration: 'none',
      display: 'inline-block',
      width: fullWidth ? '100%' : undefined,
      ...variants[variant],
    };
  },
}));
