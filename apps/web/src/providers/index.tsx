'use client';

import {
  type ThemeProviderProps,
  ThemeProvider as NextThemesProvider,
} from 'next-themes';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { TooltipProvider } from '@/components/ui/tooltip';

export const queryClient = new QueryClient();

export function Providers({
  children,
  ...props
}: WithChildren<ThemeProviderProps>): JSX.Element {
  return (
    <QueryClientProvider client={queryClient}>
      <NextThemesProvider {...props}>
        <TooltipProvider>{children}</TooltipProvider>
      </NextThemesProvider>
    </QueryClientProvider>
  );
}
