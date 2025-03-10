import type { ClassValue } from 'clsx';
import { LoaderCircle } from 'lucide-react';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@repo/ui/utils/cn.util';

const loaderVariants = cva('animate-spin fade-in-10 transition-all', {
  variants: {
    size: {
      default: 'h-5 w-5',
      sm: 'h-3.5 w-3.5',
      lg: 'h-8 w-8',
      xl: 'h-12 w-12',
    },
  },
  defaultVariants: {
    size: 'default',
  },
});

export interface LoaderProps extends VariantProps<typeof loaderVariants> {
  className?: string;
  label?: string;
  wrapperClassName?: ClassValue;
}

export function Loader({
  className,
  label,
  size,
  wrapperClassName,
}: LoaderProps): JSX.Element {
  const LoaderIcon = (
    <LoaderCircle className={loaderVariants({ className, size })} />
  );

  if (!label) return LoaderIcon;

  return (
    <div
      className={cn(
        'relative flex flex-col gap-2 items-center',
        wrapperClassName
      )}
    >
      {LoaderIcon}
      <span>{label}</span>
    </div>
  );
}
