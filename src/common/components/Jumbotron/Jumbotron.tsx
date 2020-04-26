import { Grid, Box, Typography } from '@material-ui/core';
import React from 'react';

import { ButtonLink } from '../ButtonLink';

import { useStyles } from './styles';
import { IJumbotronProps, IJumbotronStyles, IButtonOptions } from './types';

export const Jumbotron = ({
  imageSrc,
  title,
  subtitle,
  buttons,
  gradient,
  textColor,
  minHeight = 40,
  width = 'auto',
  height = 'auto',
  blurSize = 0,
}: IJumbotronProps) => {
  const stylesProps: IJumbotronStyles = {
    imageSrc,
    gradient,
    textColor,
    minHeight,
    width,
    height,
    blurSize,
  };
  const classes = useStyles(stylesProps);

  return (
    <Grid container alignItems="center" className={classes.root}>
      <Grid item xs={12} className={classes.background} />

      <Grid container item className={classes.content}>
        <Box clone py={2}>
          <Grid item xs={12}>
            <Typography variant="h4" align="center">
              {title}
            </Typography>
          </Grid>
        </Box>

        {subtitle && (
          <Box clone py={1}>
            <Grid item xs={12}>
              <Typography variant="h6" align="center">
                {subtitle}
              </Typography>
            </Grid>
          </Box>
        )}

        {buttons && (
          <Box clone py={1}>
            <Grid container item spacing={1} justify="center" xs={12}>
              {buttons.map(
                ({
                  text,
                  to,
                  variant = 'contained',
                  color = 'primary',
                }: IButtonOptions) => (
                  <Grid item key={text}>
                    <ButtonLink to={to} buttonProps={{ variant, color }}>
                      {text}
                    </ButtonLink>
                  </Grid>
                )
              )}
            </Grid>
          </Box>
        )}
      </Grid>
    </Grid>
  );
};
