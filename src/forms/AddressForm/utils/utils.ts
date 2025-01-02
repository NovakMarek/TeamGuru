import { AddressFormValues } from '../models/AddressForm';

export const createDefaultValues = (
  defaultValues?: Partial<AddressFormValues>,
) => ({
  address: '',
  ...defaultValues,
});
