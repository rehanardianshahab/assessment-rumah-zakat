import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**", // Diizinkan semua hostname untuk gambar
      },
    ],
  },
};

export default nextConfig;
