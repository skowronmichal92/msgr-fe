import React from 'react';
import {
  Grid,
  Card,
  CardHeader,
  CardContent,
  Box,
  useTheme,
  Theme,
  useMediaQuery,
} from '@material-ui/core';

interface IPanelProps {
  title: React.ReactNode;
  children: React.ReactNode;
}

export const Panel = ({ title, children }: IPanelProps) => {
  const { breakpoints } = useTheme<Theme>();
  const isSmPage = useMediaQuery(breakpoints.up('sm'));

  return (
    <Box clone py={isSmPage ? 4 : 2} px={2}>
      <Grid container justify="center">
        <Box clone width={400}>
          <Grid item xs={12} sm="auto">
            <Box clone>
              <Card>
                <CardHeader
                  title={title}
                  titleTypographyProps={{
                    variant: 'body1',
                  }}
                />
                <CardContent>{children}</CardContent>
              </Card>
            </Box>
          </Grid>
        </Box>
      </Grid>
    </Box>
  );
};
