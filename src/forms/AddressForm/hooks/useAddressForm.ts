import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { AddressFormValues } from '../models/AddressForm';
import { schema } from '../schema';
import { createDefaultValues } from '../utils/utils';

interface AddressFormProps {
  defaultValues?: Partial<AddressFormValues>;
}

export function useAddressForm({ defaultValues }: AddressFormProps) {
  return useForm<AddressFormValues>({
    resolver: yupResolver(schema),
    defaultValues: createDefaultValues(defaultValues),
  });
}
