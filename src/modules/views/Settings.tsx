import { Grid, Button } from '@material-ui/core';
import {
  PersonOutlined,
  MailOutlineOutlined,
  FaceOutlined,
} from '@material-ui/icons';
import { Formik, Form } from 'formik';
import React from 'react';

import { userData } from '_db';
import { Panel, Input, InputPassword } from 'common/components';
import { settingsSchema } from 'common/validation';
import { ISettingsInput } from 'graphql/types';

const { name, user, password, avatar } = userData.user;

const initialValues: ISettingsInput = {
  name,
  user,
  password,
  passwordConfirm: password,
  avatar,
};

export const Settings = () => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={settingsSchema}
      onSubmit={(values, actions) => {
        console.log(values);
        actions.setSubmitting(false);
      }}
    >
      {() => (
        <Form>
          <Panel title="Account settings">
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
          </Panel>
          <Panel title="Profile settings">
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Input
                  type="url"
                  label="Picture"
                  name="avatar"
                  placeholder="picture..."
                  iconLeft={FaceOutlined}
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
