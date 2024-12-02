/** @type {import('next').NextConfig} */
const nextConfig = {
  // Remove basePath and assetPrefix
  images: {
    domains: [], // Add any image domains you need
  }
}

module.exports = nextConfig