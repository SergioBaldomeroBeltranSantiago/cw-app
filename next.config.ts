import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  /* config options here */
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { remotePatterns: [new URL("https://media.forgecdn.net/**")] },
};

export default nextConfig;
