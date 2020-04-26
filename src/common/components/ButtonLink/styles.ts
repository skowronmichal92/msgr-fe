import { makeStyles } from '@material-ui/core';
import { CSSProperties } from 'react';

import { IButtonLinkStyles, Variant } from './types';

export const useStyles = makeStyles(({ palette }) => ({
  root: ({ variant }: IButtonLinkStyles) => {
    const variants: Record<Variant, CSSProperties> = {
      default: {},
      white: {
        color: palette.common.white,
        borderColor: palette.common.white,
      },
    };

    return {
      fontWeight: 400,
      ...variants[variant],
    };
  },
}));
