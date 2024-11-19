import { Fragment, type ReactNode } from 'react';

export interface ForProps<T> {
  each: Maybe<T[]>;
  fallback: JSX.Element;
  children: (item: T, index: number) => ReactNode;
}

export function For<T>({ children, each, fallback }: ForProps<T>) {
  if (!each || each.length === 0) return fallback;

  return each.map((item, index) => (
    <Fragment key={index}>{children(item, index)}</Fragment>
  ));
}
