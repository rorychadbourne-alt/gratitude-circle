/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
      appDir: true,
    },
    // Disable static optimization for pages that use Supabase
    async rewrites() {
      return []
    }
  }
  
  module.exports = nextConfig