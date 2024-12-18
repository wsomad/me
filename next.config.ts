import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/me', // Update this to match your GitHub repo name or remove if it's a user/organization site.
  assetPrefix: isProd ? '/me/' : '', // Same as above.
  trailingSlash: true, // Ensure static paths are resolved properly.
};

export default nextConfig;
