/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  experimental: {
    cpus: 1,
  },
  images: {
    domains: ['localhost'],
  },
}

module.exports = nextConfig
