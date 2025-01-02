import React, { useState } from 'react';

import { Container } from '@mui/material';
import LoginForm from '../../forms/LoginForm/LoginForm';
import { LoginFormValues } from '../../forms/LoginForm/models/LoginFormValues';
import { loginUser } from '../../lib/login/utils';
import { useCurrentUserContext } from '../../contexts/useCurrentUserContext';
import { useNavigate } from 'react-router';

const LoginContainer = () => {
  const navigate = useNavigate();
  const { setUser } = useCurrentUserContext();

  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (data: LoginFormValues) => {
    try {
      const user = loginUser(data.username, data.password);
      setUser(user);
      navigate('/profile');
    } catch (error: unknown) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError('An unknown error occurred');
      }
    }
  };

  return (
    <Container>
      {error && <p>{error}</p>}
      <LoginForm handleSubmit={handleSubmit} />
    </Container>
  );
};

export default LoginContainer;
