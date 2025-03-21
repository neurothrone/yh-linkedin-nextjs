import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    domains: [
      "media.licdn.com",
      "platform-lookaside.fbsbx.com",
      "lh3.googleusercontent.com",
      "profile.licdn.com",
      "media-exp1.licdn.com",
      "media-exp2.licdn.com",
      "media-exp3.licdn.com",
    ],
  },
};

export default nextConfig;
