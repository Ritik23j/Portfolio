import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: 'export',
  trailingSlash: true,  // Add this for better compatibility with GitHub Pages
  basePath: '',
  images: {
    domains: ['ritikjain.info'],
    formats: ['image/webp'],
    unoptimized: true, // Required for static exports
  },
};

export default nextConfig;
