/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // Enable static export for Netlify deployment
  output: 'export',
  trailingSlash: true,
  skipTrailingSlashRedirect: true,
  // Fix cross-origin dev server issues (dev only)
  ...(process.env.NODE_ENV === 'development' && {
    allowedDevOrigins: [
      'impure-pocket-watch.net',
      'dead-curl.com', 
      'apt-executor.info',
      'incomparable-guard.name',
      '98f39229996b45199615ff98912efd50-1d45e326677546d9aedea4be9.fly.dev'
    ],
    experimental: {
      webpackBuildWorker: true,
    },
  }),
  // Ensure proper asset handling
  assetPrefix: process.env.NODE_ENV === 'production' ? undefined : '',
}

export default nextConfig
