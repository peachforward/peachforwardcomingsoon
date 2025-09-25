import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ["res.cloudinary.com"]
  }, eslint: {
    // Warning: This will completely ignore ESLint during builds
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
