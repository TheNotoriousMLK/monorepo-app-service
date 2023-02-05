/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    transpilePackages: ['@hms/ui'],
  },
}

module.exports = nextConfig
