import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { remotePatterns: [new URL("https://media.forgecdn.net/**")] },
};

export default nextConfig;
