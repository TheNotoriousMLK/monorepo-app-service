/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    transpilePackages: ['@hms/ui', '@hms/utils'],
  },
}

module.exports = nextConfig
