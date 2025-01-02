import React, { FC, ReactNode, useEffect } from 'react';

import { useCurrentUserContext } from '../contexts/useCurrentUserContext';
import { useNavigate } from 'react-router';

interface ProtectedRoutesProps {
  children?: ReactNode;
}

const ProtectedRoutes: FC<ProtectedRoutesProps> = ({ children }) => {
  const navigate = useNavigate();
  const { currentUser } = useCurrentUserContext();

  useEffect(() => {
    if (!currentUser) {
      navigate('/login');
    }
  }, [currentUser, navigate]);

  return <div>{children}</div>;
};

export default ProtectedRoutes;
