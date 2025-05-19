import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: { remotePatterns: [new URL("https://media.forgecdn.net/**")] },
};

export default nextConfig;
