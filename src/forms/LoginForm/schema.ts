import { object, ObjectSchema, string } from 'yup';
import { LoginFormValues } from './models/LoginFormValues';

export const schema: ObjectSchema<LoginFormValues> = object({
  username: string().required('Username is required'),
  password: string()
    .required('Password is required')
    .min(8, 'Password must be at least 8 characters')
    .max(64, 'Password must be less than 64 characters'),
});
