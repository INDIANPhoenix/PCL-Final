/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    domains: ['images.google.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.google.com',
        port: '',
        pathname: '/**',
      },
    ],
    unoptimized: true,
  },
  experimental: {
    suppressHydrationWarning: true,
  },
}

export default nextConfig
