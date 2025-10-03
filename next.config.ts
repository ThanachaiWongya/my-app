import type { NextConfig } from "next";
import createNextIntlPlugin from 'next-intl/plugin';

const baseConfig: NextConfig = {
  /* config options here */
  output: 'export',

  eslint: {
    dirs: ['.'],
    ignoreDuringBuilds: true, // Disable ESLint during builds
  },
  poweredByHeader: false,
  reactStrictMode: true,
  outputFileTracingIncludes: {
    '/': ['./migrations/**/*'],
  },

  // Production build optimizations
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },

  // Static export optimizations
  trailingSlash: false,

  // Performance optimizations
  experimental: {
    optimizePackageImports: [
      'next-intl',
      'daisyui',
      'lucide-react',
      'react-icons',
      '@icons-pack/react-simple-icons',
    ],
  },

  // Turbopack configuration
  turbopack: {
    rules: {
      '*.svg': {
        loaders: ['@svgr/webpack'],
        as: '*.js',
      },
    },
  },

  // Build output optimization
  compress: true,

  // Image optimization
  images: {
    unoptimized: true
  },
};

const configWithPlugins = createNextIntlPlugin('./src/libs/I18n.ts')(baseConfig);

const nextConfig = configWithPlugins;
export default nextConfig;
