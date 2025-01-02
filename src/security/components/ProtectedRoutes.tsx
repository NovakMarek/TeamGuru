import React, { ReactNode, useEffect } from 'react';

import { useCurrentUserContext } from '../../contexts/useCurrentUserContext';
import { useNavigate } from 'react-router';

interface ProtectedRoutesProps {
  children?: ReactNode;
}

const ProtectedRoutes = ({ children }: ProtectedRoutesProps) => {
  const navigate = useNavigate();
  const { currentUser } = useCurrentUserContext();

  useEffect(() => {
    if (!currentUser) {
      navigate('/');
    }
  }, [currentUser, navigate]);

  return <div>{children}</div>;
};

export default ProtectedRoutes;
