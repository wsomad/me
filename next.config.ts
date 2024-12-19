/** @type {import('next').NextConfig} */
const nextConfig: import('next').NextConfig = {
  output: 'export',
  basePath: '/me', // Replace <repository-name> with your GitHub repo name.
  assetPrefix: '/me/',
  trailingSlash: true, // Ensures directories generate index.html files.
};

module.exports = nextConfig
