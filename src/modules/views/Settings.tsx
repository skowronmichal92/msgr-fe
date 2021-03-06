import { Grid, Button, Box } from '@material-ui/core';
import {
  PersonOutlined,
  MailOutlineOutlined,
  FaceOutlined,
} from '@material-ui/icons';
import { Formik, Form } from 'formik';
import React, { useContext } from 'react';

import { UserContext } from 'application/context';
import { Panel, Input, InputPassword, Container } from 'common/components';
import { settingsSchema } from 'common/validation';
import { ISettingsInput } from 'graphql/types';

export const Settings = () => {
  const { name, user, avatar = '' } = useContext(UserContext);

  const initialValues: ISettingsInput = {
    name,
    user,
    password: '',
    passwordConfirm: '',
    avatar,
  };

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
        <Container>
          <Form>
            <Grid container>
              <Box clone pb={6}>
                <Grid item xs={12}>
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
                </Grid>
              </Box>
              <Grid item xs={12}>
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
              </Grid>
            </Grid>
          </Form>
        </Container>
      )}
    </Formik>
  );
};
