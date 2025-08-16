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
  // Fix cross-origin dev server issues
  allowedDevOrigins: [
    'impure-pocket-watch.net',
    'dead-curl.com', 
    'apt-executor.info',
    'incomparable-guard.name'
  ],
  // Improve dev server stability
  experimental: {
    webpackBuildWorker: true,
  },
  // Ensure proper asset handling
  assetPrefix: process.env.NODE_ENV === 'production' ? undefined : '',
}

export default nextConfig
