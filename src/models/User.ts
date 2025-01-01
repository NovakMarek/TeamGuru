export interface User {
  name: string;
  email: string;
  password: string;
  location: string;
}

export type CurrentUser = Pick<User, 'name' | 'email' | 'location'>;
