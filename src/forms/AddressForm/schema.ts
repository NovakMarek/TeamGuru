import { object, ObjectSchema, string } from 'yup';
import { AddressFormValues } from './models/AddressForm';

export const schema: ObjectSchema<AddressFormValues> = object({
  address: string().required('Address is required'),
});
