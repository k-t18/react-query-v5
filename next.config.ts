import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "s.yimg.com",
      },
    ],
  },
};

export default nextConfig;
