import { withHydrationOverlay } from '@builder.io/react-hydration-overlay/next';

/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['@repo/ui', '@repo/shared'],
};

const isDev = process.env.NODE_ENV === 'development';

const config = isDev
  ? withHydrationOverlay({ appRootSelector: 'main' })(nextConfig)
  : nextConfig;

export default config;
