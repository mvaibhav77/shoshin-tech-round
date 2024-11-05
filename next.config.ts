import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    ignoreBuildErrors: true, // ignore build errors
  },

  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
