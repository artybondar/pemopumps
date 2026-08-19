/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', 
  images: {
    remotePatterns: [],
    unoptimized: true,
  },
  reactStrictMode: true,
  poweredByHeader: false,
  trailingSlash: true,
};

module.exports = nextConfig;