import { makeStyles } from '@material-ui/core';

import { IJumbotronStyles } from './types';

const SIDE_PADDING = 2;

export const useStyles = makeStyles(({ spacing }) => ({
  container: ({ minHeight = 50 }: IJumbotronStyles) => ({
    minHeight: spacing(minHeight),
    position: 'relative',
  }),
  background: ({ imageSrc, gradient, blurSize = 0 }: IJumbotronStyles) => ({
    position: 'absolute',
    top: 0,
    left: 0,
    height: '100%',
    width: '100%',
    background: `${gradient ? gradient + ',' : ''}url(${imageSrc})`,
    backgroundSize: 'cover',
    filter: `blur(${blurSize}px)`,
  }),
  content: ({ textColor }: IJumbotronStyles) => ({
    color: textColor,
    zIndex: 1,
  }),
  title: {
    padding: spacing(2, SIDE_PADDING),
  },
  subtitle: {
    padding: spacing(1, SIDE_PADDING),
  },
  buttons: {
    padding: spacing(1, SIDE_PADDING),
  },
}));
