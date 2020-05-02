import { yup } from 'application/utils';
import { ISettingsInput } from 'graphql/types';

import { validationRules } from './validationRules';

const { name, user, password, passwordConfirm, avatar } = validationRules;

export const settingsSchema = yup.object().shape<ISettingsInput>({
  name,
  user,
  password,
  passwordConfirm,
  avatar,
});
