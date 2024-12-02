/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true,
  },
  assetPrefix: process.env.NODE_ENV === 'production' ? '/personal-website/' : '',
  basePath: process.env.NODE_ENV === 'production' ? '/personal-website' : '',
  trailingSlash: true,
};

export default nextConfig;