import { makeStyles } from '@material-ui/core';
import { CSSProperties } from 'react';

import { ILinkStyles, Variant } from './types';

export const useStyles = makeStyles(({ palette }) => ({
  root: ({ variant }: ILinkStyles) => {
    const variants: Record<Variant, CSSProperties> = {
      default: {},
      white: {
        color: palette.common.white,
      },
    };

    return {
      textDecoration: 'none',
      display: 'inline-block',
      ...variants[variant],
    };
  },
}));
