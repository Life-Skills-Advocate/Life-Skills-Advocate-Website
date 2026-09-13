import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lifeskillsadvocate.com',
      },
      {
        protocol: 'https',
        hostname: '**.wp-content.uploads',
      },
    ],
  },
  // Preserve all HTML semantics and structure
  experimental: {
    optimizePackageImports: ['react'],
  },
};

export default nextConfig;
