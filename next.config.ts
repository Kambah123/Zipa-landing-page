import type { NextConfig } from "next";

const APP_URL = process.env.NEXT_PUBLIC_APP_URL ?? "https://app.usezipa.xyz";

const nextConfig: NextConfig = {
  reactCompiler: false,
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
