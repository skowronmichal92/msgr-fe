import { makeStyles } from '@material-ui/core';

import { IJumbotronStyles } from './types';

export const useStyles = makeStyles(({ spacing }) => ({
  root: ({ minHeight, width, height }: IJumbotronStyles) => ({
    minHeight: spacing(minHeight),
    width,
    height,
    position: 'relative',
  }),
  background: ({ imageSrc, gradient, blurSize }: IJumbotronStyles) => ({
    position: 'absolute',
    top: 0,
    left: 0,
    height: '100%',
    width: '100%',
    background: `${gradient ? gradient + ',' : ''}url(${imageSrc})`,
    backgroundSize: 'cover',
    // TODO remove blurred edges
    filter: `blur(${blurSize}px)`,
  }),
  content: ({ textColor }: IJumbotronStyles) => ({
    color: textColor,
    zIndex: 1,
    padding: spacing(2),
  }),
}));
