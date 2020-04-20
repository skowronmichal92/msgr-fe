import { ObjectSchemaDefinition } from 'yup';

import { yup } from 'application/utils';
import { ILoginInput } from 'types/graphql';

import { validationRules } from './validationRules';

const { user, password } = validationRules;

export const loginShape: ObjectSchemaDefinition<ILoginInput> = {
  user,
  password,
};

export const loginSchema = yup.object().shape<ILoginInput>(loginShape);
