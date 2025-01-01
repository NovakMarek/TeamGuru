import React, { createContext, FC, useCallback, useState } from 'react';
import { CurrentUser } from '../models/User';

export interface CurrentUserContextValue {
  currentUser: CurrentUser | null;
  login: (user: CurrentUser) => void;
  logout: () => void;
}

export const CurrentUserContext = createContext<CurrentUserContextValue | null>(
  null,
);

interface CurrentUserProviderProps {
  children?: React.ReactNode;
}

export const CurrentUserProvider: FC<CurrentUserProviderProps> = ({
  children,
}) => {
  const [currentUser, setCurrentUser] = useState<CurrentUser | null>({
    name: 'Jon Doe',
    email: 'jon@doe.com',
    location: 'New York City',
  });

  const login = useCallback((user: CurrentUser) => {
    setCurrentUser(user);
  }, []);

  const logout = useCallback(() => {
    setCurrentUser(null);
  }, []);

  return (
    <CurrentUserContext.Provider value={{ currentUser, login, logout }}>
      {children}
    </CurrentUserContext.Provider>
  );
};
