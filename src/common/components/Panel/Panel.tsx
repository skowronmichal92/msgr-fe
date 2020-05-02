import {
  Grid,
  Card,
  CardHeader,
  CardContent,
  Box,
  useTheme,
  useMediaQuery,
} from '@material-ui/core';
import React from 'react';

interface IPanelProps {
  title: React.ReactNode;
  children: React.ReactNode;
}

export const Panel = ({ title, children }: IPanelProps) => {
  const theme = useTheme();
  const isSmPage = useMediaQuery(theme.breakpoints.up('sm'));

  return (
    <Box clone py={isSmPage ? 6 : 4} px={2}>
      <Grid container justify="center">
        <Box clone width={400}>
          <Grid item xs={12} sm="auto">
            <Box clone>
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
            </Box>
          </Grid>
        </Box>
      </Grid>
    </Box>
  );
};
