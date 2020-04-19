import { yup } from 'application/utils';

import { ILoginInput } from 'types/graphql';

export const validationSchema = yup.object().shape<ILoginInput>({
  user: yup.string().email().required(),
  password: yup.string().min(8).required(),
});
