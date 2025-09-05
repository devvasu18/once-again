/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ollya.codexcoder.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
}

module.exports = nextConfig
