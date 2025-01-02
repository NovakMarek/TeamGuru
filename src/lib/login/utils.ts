import { users } from '../../database/users';
import { CurrentUser } from '../../models/User';

export const loginUser = (username: string, password: string): CurrentUser => {
  const user = users.find(user => user.username === username);

  if (!user) {
    throw new Error('Invalid username or password');
  }

  if (user.password !== password) {
    throw new Error('Invalid username or password');
  }

  return { username: user.username, name: user.name, address: user.address };
};
