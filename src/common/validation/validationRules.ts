import { ObjectSchemaDefinition, StringSchema } from 'yup';

import { yup } from 'application/utils';
import { ILoginInput, IRegisterInput } from 'types/graphql';

type ValidationProps = ILoginInput & IRegisterInput;

const passwordSchema: StringSchema<string> = yup.string().min(8).required();

const validationRules: ObjectSchemaDefinition<ValidationProps> = {
  name: yup.string().min(3).required(),
  user: yup.string().email().required(),
  password: passwordSchema,
  passwordConfirm: passwordSchema.oneOf(
    [yup.ref('password'), null],
    "Passwords don't match"
  ),
};

export { validationRules };
