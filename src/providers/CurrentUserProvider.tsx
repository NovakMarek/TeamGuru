import React, { createContext, useState, useMemo } from 'react';
import { CurrentUser } from '../models/User';

export interface CurrentUserContextValue {
  currentUser: CurrentUser | null;
  setUser: (user: CurrentUser) => void;
  logout: () => void;
}

export const CurrentUserContext = createContext<CurrentUserContextValue | null>(
  null,
);

interface CurrentUserProviderProps {
  children?: React.ReactNode;
}

export const CurrentUserProvider = ({ children }: CurrentUserProviderProps) => {
  const [currentUser, setCurrentUser] = useState<CurrentUser | null>(null);

  const setUser = (user: CurrentUser) => {
    setCurrentUser(user);
  };

  const logout = () => {
    setCurrentUser(null);
  };

  const contextValues = useMemo(
    () => ({
      currentUser,
      setUser,
      logout,
    }),
    [currentUser, setUser, logout],
  );

  return (
    <CurrentUserContext.Provider value={contextValues}>
      {children}
    </CurrentUserContext.Provider>
  );
};
