import * as yupObject from 'yup';

yupObject.setLocale({
  mixed: {
    required: 'Field is required',
  },
  string: {
    email: 'Invalid email address',
    min: ({ min }) => `Field must be at least ${min} characters`,
  },
});

export const yup = yupObject;
