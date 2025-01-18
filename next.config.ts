/** @type {import('next').NextConfig} */
const isProd: boolean = process.env.NODE_ENV === 'production';

const nextConfig: import('next').NextConfig = {
  output: 'export',
  basePath: isProd ? '/me' : '', 
  assetPrefix: isProd ? '/me/' : '',
  trailingSlash: true, // Ensures directories generate index.html files.
  images: { unoptimized: true},
  env: {
    NEXT_PUBLIC_BASE_PATH: isProd ? '/me' : '', // Expose basePath for client-side use
  },
};

module.exports = nextConfig
