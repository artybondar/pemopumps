/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  reactStrictMode: true,
  poweredByHeader: false,
  skipTrailingSlashRedirect: true,
  
  //basePath: '/projects/pemopumps',
  //assetPrefix: '/projects/pemopumps',
};

module.exports = nextConfig;