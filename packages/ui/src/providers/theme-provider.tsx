'use client';

import {
  useTheme,
  type ThemeProviderProps,
  ThemeProvider as NextThemesProvider,
} from 'next-themes';

export { useTheme };

export function ThemeProvider({
  children,
  attribute = 'class',
  defaultTheme = 'light',
  enableSystem = true,
  disableTransitionOnChange = true,
  ...props
}: WithChildren<ThemeProviderProps>) {
  return (
    <NextThemesProvider
      attribute={attribute}
      defaultTheme={defaultTheme}
      enableSystem={enableSystem}
      disableTransitionOnChange={disableTransitionOnChange}
      {...props}
    >
      {children}
    </NextThemesProvider>
  );
}
