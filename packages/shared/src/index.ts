export function isNullableValue<T>(value: T): value is T & (null | undefined) {
  return value === null || value === undefined;
}

export * from './zod';
export * from './date.utils';
export * from './currency.util';
export * from './catch-error.util';
