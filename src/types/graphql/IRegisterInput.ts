import { ILoginInput } from './ILoginInput';

export interface IRegisterInput extends ILoginInput {
  name: string;
  passwordConfirm: string;
}
