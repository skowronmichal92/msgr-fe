interface IUser {
  id: string;
  name: string;
  user: string;
  avatar?: string;
}

interface IUserInput {
  id: string;
}

interface IUserResponse {
  user: IUser;
}

export type { IUser, IUserInput, IUserResponse };
