'use client';

import { Toaster } from '@repo/ui/components/ui/toaster';
import { ThemeProvider } from '@repo/ui/providers/theme-provider';
import { TooltipProvider } from '@repo/ui/providers/tooltip-provider';
import { TanstackProvider } from '@repo/ui/providers/tanstack-provider';

export function Providers({ children }: WithChildren) {
  return (
    <ThemeProvider>
      <TanstackProvider>
        <TooltipProvider>
          {children}
          <Toaster />
        </TooltipProvider>
      </TanstackProvider>
    </ThemeProvider>
  );
}
