import React, { FC } from 'react';

import { StandardTextFieldProps, TextField } from '@mui/material';
import { Controller, useFormContext } from 'react-hook-form';

interface FormTextFieldProps {
  name: string;
  defaultValue?: unknown;
}

const FormTextField: FC<FormTextFieldProps & StandardTextFieldProps> = ({
  name,
  defaultValue,
  ...props
}) => {
  const { control } = useFormContext();

  return (
    <Controller
      control={control}
      name={name}
      defaultValue={defaultValue}
      render={({ field, fieldState: { error } }) => (
        <TextField
          {...field}
          {...props}
          error={!!error}
          helperText={error?.message as string}
        />
      )}
    />
  );
};

export default FormTextField;
