export interface User {
  name: string;
  username: string;
  password: string;
  address: string;
}

export type CurrentUser = Pick<User, 'name' | 'username' | 'address'>;
