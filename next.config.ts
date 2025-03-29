import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/sniphub-private-policy',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
