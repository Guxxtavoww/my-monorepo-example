'use client';

import {
  useForm,
  type FieldValues,
  type UseFormProps,
  type UseFormReturn,
} from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import type { ZodTypeDef, ZodSchema } from '@repo/shared';

export function useFormWithSchema<
  TOutput extends FieldValues = FieldValues,
  TDef extends ZodTypeDef = ZodTypeDef,
  TInput = TOutput,
  TContext = any,
>(
  schema: ZodSchema<TOutput, TDef, TInput>,
  props?: Omit<UseFormProps<TOutput, TContext>, 'resolver'>,
): UseFormReturn<TOutput, TContext, undefined> {
  const form = useForm<TOutput, TContext, undefined>({
    resolver: zodResolver(schema),
    ...props,
  });

  return form;
}
