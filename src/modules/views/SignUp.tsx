import { Grid, Button } from '@material-ui/core';
import { PersonOutlined, MailOutlineOutlined } from '@material-ui/icons';
import { Formik, Form } from 'formik';
import React from 'react';

import { Panel, Input, InputPassword } from 'common/components';
import { registerSchema } from 'common/validation';
import { IRegisterInput } from 'graphql/types';

const initialValues: IRegisterInput = {
  name: '',
  user: '',
  password: '',
  passwordConfirm: '',
};

export const SignUp = () => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={registerSchema}
      onSubmit={(values, actions) => {
        console.log(values);
        actions.setSubmitting(false);
      }}
    >
      {() => (
        <Panel title="Register your msgr account!">
          <Form>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Input
                  label="Name"
                  name="name"
                  placeholder="name..."
                  iconLeft={PersonOutlined}
                />
              </Grid>
              <Grid item xs={12}>
                <Input
                  type="email"
                  label="E-mail"
                  name="user"
                  placeholder="e-mail..."
                  iconLeft={MailOutlineOutlined}
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
                <InputPassword
                  label="Confirm password"
                  name="passwordConfirm"
                  placeholder="confirm password..."
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
