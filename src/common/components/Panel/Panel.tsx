import { Grid, Card, CardHeader, CardContent, Box } from '@material-ui/core';
import React from 'react';

interface IPanelProps {
  title: React.ReactNode;
  children: React.ReactNode;
}

export const Panel = ({ title, children }: IPanelProps) => {
  return (
    <Grid container justify="center">
      <Box clone width={400}>
        <Grid item xs={12} sm="auto">
          <Card>
            <CardHeader
              title={title}
              titleTypographyProps={{
                variant: 'body1',
                align: 'center',
              }}
            />
            <CardContent>{children}</CardContent>
          </Card>
        </Grid>
      </Box>
    </Grid>
  );
};
