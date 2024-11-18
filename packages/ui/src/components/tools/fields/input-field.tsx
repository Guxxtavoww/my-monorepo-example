'use client';

import { useFormContext } from 'react-hook-form';

import { useFieldId } from '@repo/ui/hooks/use-field-id.hook';

import { Input, type InputProps } from '../../ui/input';
import { FormField, FormItem, FormLabel, FormMessage } from '../../ui/form';

import { PasswordInput } from './password-input';

export interface InputFieldProps
  extends Omit<
    InputProps,
    'name' | 'defaultChecked' | 'id' | 'checked' | 'defaultChecked'
  > {
  name: string;
  label?: string;
  /**
   * Please make sure if you have a zod schema, it reflects the behaviour of the schema
   * @type `boolean`
   */
  isRequired?: boolean;
  formItemClassName?: string;
}

export function InputField({
  name,
  type = 'text',
  className,
  defaultValue = '',
  label,
  disabled,
  isRequired,
  formItemClassName,
  ...rest
}: InputFieldProps): JSX.Element {
  const id = useFieldId(name);
  const { control } = useFormContext();

  return (
    <FormField
      control={control}
      name={name}
      defaultValue={defaultValue}
      disabled={disabled}
      render={({ field: { onChange, value = '', ...field } }) => (
        <FormItem className={formItemClassName}>
          {label ? (
            <FormLabel htmlFor={id} className="relative">
              {label}
              {isRequired ? (
                <strong className="absolute -top-0.5 text-red-600">*</strong>
              ) : null}
            </FormLabel>
          ) : null}
          {type === 'password' ? (
            <PasswordInput
              {...rest}
              {...field}
              value={value}
              className={className}
              onChange={onChange}
              id={id}
              autoComplete={`current-${name}`}
            />
          ) : (
            <Input
              {...rest}
              {...field}
              value={value}
              className={className}
              onChange={(e) => {
                const inputValue = e.target.value;
                onChange(type === 'number' ? +inputValue : inputValue);
              }}
              type={type}
              id={id}
              autoComplete={`current-${name}`}
            />
          )}
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
