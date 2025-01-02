import React, { createContext, useState, useMemo } from 'react';
import { CurrentUser } from '../models/User';
import { useNavigate } from 'react-router';

export interface CurrentUserContextValue {
  currentUser: CurrentUser | null;
  setUser: (user: CurrentUser) => void;
  logout: () => void;
  updateAddress: (newAddress: string) => void;
}

export const CurrentUserContext = createContext<CurrentUserContextValue | null>(
  null,
);

interface CurrentUserProviderProps {
  children?: React.ReactNode;
}

export const CurrentUserProvider = ({ children }: CurrentUserProviderProps) => {
  const [currentUser, setCurrentUser] = useState<CurrentUser | null>(null);

  const navigate = useNavigate();

  const setUser = (user: CurrentUser) => {
    setCurrentUser(user);
  };

  const logout = () => {
    setCurrentUser(null);
    navigate('/');
  };

  const updateAddress = (newAddress: string) => {
    if (currentUser) {
      setCurrentUser({
        ...currentUser,
        address: newAddress,
      });
    }
  };

  const contextValues = useMemo(
    () => ({
      currentUser,
      setUser,
      logout,
      updateAddress,
    }),
    [currentUser, setUser, logout],
  );

  return (
    <CurrentUserContext.Provider value={contextValues}>
      {children}
    </CurrentUserContext.Provider>
  );
};
