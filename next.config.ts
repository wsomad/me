/** @type {import('next').NextConfig} */
const isProd: boolean = process.env.NODE_ENV === 'production';

const nextConfig: import('next').NextConfig = {
  //output: 'export',
  basePath: isProd ? '/me' : '', // Use basePath only in production.
  assetPrefix: isProd ? '/me/' : '', // Use assetPrefix only in production.
  trailingSlash: true, // Ensures directories generate index.html files.
  images: { unoptimized: true}
};

module.exports = nextConfig
