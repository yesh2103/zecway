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
  // Enable static export for Netlify
  output: 'export',
  trailingSlash: true,
  skipTrailingSlashRedirect: true,
  // Fix cross-origin dev server issues (dev only)
  ...(process.env.NODE_ENV === 'development' && {
    allowedDevOrigins: [
      'impure-pocket-watch.net',
      'dead-curl.com', 
      'apt-executor.info',
      'incomparable-guard.name'
    ],
    experimental: {
      webpackBuildWorker: true,
    },
  }),
  // Ensure proper asset handling
  assetPrefix: process.env.NODE_ENV === 'production' ? undefined : '',
}

export default nextConfig
