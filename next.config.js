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
    domains: ["images.unsplash.com", "plus.unsplash.com", "lh3.googleusercontent.com", "blob.v0.dev"],
  },
  experimental: {
    serverComponentsExternalPackages: ["nodemailer"],
  },
}

module.exports = nextConfig
