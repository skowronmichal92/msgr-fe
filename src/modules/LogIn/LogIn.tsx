import React from 'react';
import { Formik, Form } from 'formik';
import { Grid, Button } from '@material-ui/core';
import { PersonOutlined } from '@material-ui/icons';

import { Panel, Input, InputPassword } from 'components';
import { ILoginInput } from 'types/graphql';
import { loginSchema } from 'common/validation';

const initialValues: ILoginInput = {
  user: '',
  password: '',
};

export const LogIn = () => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={loginSchema}
      onSubmit={(values, actions) => {
        console.log(values);
        actions.setSubmitting(false);
      }}
    >
      {() => (
        <Panel title="Log in to your msgr account!">
          <Form>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Input
                  type="email"
                  label="E-mail"
                  name="user"
                  placeholder="e-mail..."
                  iconLeft={PersonOutlined}
                />
              </Grid>
              <Grid item xs={12}>
                <InputPassword
                  label="Password"
                  name="password"
                  placeholder="password..."
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  type="submit"
                  variant="contained"
                  color="secondary"
                  fullWidth
                >
                  Submit
                </Button>
              </Grid>
            </Grid>
          </Form>
        </Panel>
      )}
    </Formik>
  );
};
