import type { NextConfig } from "next";

const APP_URL = process.env.NEXT_PUBLIC_APP_URL ?? "https://kivo-three-eta.vercel.app";

const nextConfig: NextConfig = {
  reactCompiler: true,
  async redirects() {
    return [
      {
        source: "/pay/:path*",
        destination: `${APP_URL}/pay/:path*`,
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
