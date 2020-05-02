import { Grid, Button } from '@material-ui/core';
import { PersonOutlined } from '@material-ui/icons';
import { Formik, Form } from 'formik';
import React, { useContext } from 'react';

import { UserContext } from 'application/context';
import { getUserAuthorizedRoles } from 'application/utils';
import { Panel, Input, InputPassword } from 'common/components';
import { loginSchema } from 'common/validation';
import { ILoginInput } from 'graphql/types';

const initialValues: ILoginInput = {
  user: '',
  password: '',
};

export const LogIn = () => {
  const { roles, setRoles } = useContext(UserContext);

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={loginSchema}
      onSubmit={(values, actions) => {
        console.log(values);

        setTimeout(() => {
          const newRoles = getUserAuthorizedRoles(roles);
          setRoles(newRoles);
        }, 500);

        actions.setSubmitting(false);
      }}
    >
      {() => (
        <Form>
          <Panel title="Log in to your msgr account!">
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
          </Panel>
        </Form>
      )}
    </Formik>
  );
};
