import { ObjectSchemaDefinition } from 'yup';

import { yup } from 'application/utils';
import { ILoginInput } from 'types/graphql';

import { validationRules } from './validationRules';

const { user, password } = validationRules;

const loginShape: ObjectSchemaDefinition<ILoginInput> = {
  user,
  password,
};

const loginSchema = yup.object().shape<ILoginInput>(loginShape);

export { loginSchema };
