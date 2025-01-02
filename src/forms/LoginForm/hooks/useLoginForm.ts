import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { LoginFormValues } from '../models/LoginFormValues';
import { schema } from '../schema';

export function useLoginForm() {
  return useForm<LoginFormValues>({
    resolver: yupResolver(schema),
  });
}
