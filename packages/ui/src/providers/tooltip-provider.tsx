'use client';

import { TooltipProvider as ShadcnTooltipProvider } from '@repo/ui/components/ui/tooltip';

export function TooltipProvider({ children }: WithChildren) {
  return <ShadcnTooltipProvider>{children}</ShadcnTooltipProvider>;
}
