import Link, { type LinkProps } from 'next/link';
import type { AnchorHTMLAttributes } from 'react';
import { type VariantProps } from 'class-variance-authority';

import { buttonVariants } from '../ui/button';

const customLinkVariants = buttonVariants

export interface CustomLinkProps
  extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'>,
    LinkProps,
    VariantProps<typeof customLinkVariants> {
  className?: string;
}

export function CustomLink({
  className,
  children,
  variant,
  size,
  ...rest
}: WithChildren<CustomLinkProps>) {
  return (
    <Link
      {...rest}
      className={customLinkVariants({ className, size, variant })}
    >
      {children}
    </Link>
  );
}
