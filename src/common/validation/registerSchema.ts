import { yup } from 'application/utils';
import { IRegisterInput } from 'types/graphql';

import { validationRules } from './validationRules';

const { name, user, password, passwordConfirm } = validationRules;

export const registerSchema = yup.object().shape<IRegisterInput>({
  name,
  user,
  password,
  passwordConfirm,
});
