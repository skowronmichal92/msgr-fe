import React from 'react';
import { Grid, Typography } from '@material-ui/core';

import { ButtonLink } from 'components';

import { useStyles } from './styles';
import { IJumbotronProps, IButtonOptions } from './types';

export const Jumbotron = ({
  imageSrc,
  title,
  subtitle,
  buttons,
  gradient,
  textColor,
  minHeight,
  blurSize,
}: IJumbotronProps) => {
  const classes = useStyles({
    imageSrc,
    gradient,
    textColor,
    minHeight,
    blurSize,
  });

  return (
    <Grid container alignItems="center" className={classes.container}>
      <Grid item xs={12} className={classes.background} />

      <Grid container item className={classes.content}>
        <Grid item xs={12} className={classes.title}>
          <Typography variant="h4" align="center">
            {title}
          </Typography>
        </Grid>

        {subtitle && (
          <Grid item xs={12} className={classes.subtitle}>
            <Typography variant="h6" align="center">
              {subtitle}
            </Typography>
          </Grid>
        )}

        {buttons && (
          <Grid
            container
            item
            spacing={1}
            justify="center"
            xs={12}
            className={classes.buttons}
          >
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
        )}
      </Grid>
    </Grid>
  );
};
