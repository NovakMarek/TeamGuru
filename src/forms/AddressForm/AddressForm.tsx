import React, { FC } from 'react';

import { FormProvider } from 'react-hook-form';
import { useAddressForm } from './hooks/useAddressForm';
import { Box, Button } from '@mui/material';
import FormTextField from '../../components/ui/FormTextField';
import { AddressFormValues } from './models/AddressForm';

interface AddressFormProps {
  handleSubmit: (values: AddressFormValues) => void;
  defaultValues?: Partial<AddressFormValues>;
}

const AddressForm: FC<AddressFormProps> = ({ handleSubmit, defaultValues }) => {
  const form = useAddressForm({ defaultValues });

  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)}>
        <Box
          component="div"
          sx={{ display: 'flex', flexDirection: 'column', gap: '10px', mt: 2 }}
        >
          <FormTextField name="address" label="Address" fullWidth />
          <Button type="submit" variant="contained" disableElevation fullWidth>
            Save
          </Button>
        </Box>
      </form>
    </FormProvider>
  );
};

export default AddressForm;
