import React, { FC } from 'react';

import { FormProvider } from 'react-hook-form';
import { useLoginForm } from './hooks/useLoginForm';
import FormTextField from '../../components/ui/FormTextField';
import { LoginFormValues } from './models/LoginFormValues';
import { Box, Button } from '@mui/material';

interface LoginFromProps {
  handleSubmit: (values: LoginFormValues) => void;
}

const LoginForm: FC<LoginFromProps> = ({ handleSubmit }) => {
  const form = useLoginForm();

  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)}>
        <Box
          component="div"
          sx={{ display: 'flex', flexDirection: 'column', gap: '10px', mt: 4 }}
        >
          <FormTextField name="username" label="Username" />
          <FormTextField name="password" label="Password" type="password" />
          <Button type="submit" variant="contained" disableElevation>
            Login
          </Button>
        </Box>
      </form>
    </FormProvider>
  );
};

export default LoginForm;
