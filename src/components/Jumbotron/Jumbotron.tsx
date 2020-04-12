import React from 'react';
import { Link } from 'react-router-dom';
import {
  Grid,
  Typography,
  Button,
  makeStyles,
  ButtonTypeMap,
} from '@material-ui/core';

import { ButtonLink } from 'components';

const SIDE_PADDING = 2;

const useStyles = makeStyles(({ spacing }) => ({
  //   container: {
  //     // position: 'relative',
  //   },
  //   imageWrapper: {
  //     position: 'absolute',
  //   },
  //   image: {
  //     opacity: 0.75,
  //     filter: 'blur(3px)',
  //     maxWidth: '100%',
  //   },
  container: ({ imageSrc }: IJumbotronStyles) => ({
    minHeight: spacing(40),
    background: `linear-gradient(135deg, rgba(242,19,60,.75) 0%, rgba(28,18,87,.75) 100%), url(${imageSrc})`,
    // backgroundImage: `url(${imageSrc})`,
    backgroundSize: 'cover',
    // filter: 'blur(3px)',
  }),
  content: {
    color: 'white',
  },
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

interface IButtonOptions {
  text: string;
  to: string;
  variant?: ButtonTypeMap['props']['variant'];
  color?: ButtonTypeMap['props']['color'];
}

interface IJumbotronStyles {
  imageSrc: string;
}

interface IJumbotronProps extends IJumbotronStyles {
  title: string;
  subtitle?: string;
  buttons?: IButtonOptions[];
}

export const Jumbotron = ({
  imageSrc,
  title,
  subtitle,
  buttons,
}: IJumbotronProps) => {
  const classes = useStyles({ imageSrc });
  return (
    <Grid container alignItems="center" className={classes.container}>
      {/* <Grid item xs={12} className={classes.imageWrapper}>
        <img src={imageSrc} className={classes.image} alt="jumbotron" />
      </Grid> */}
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
