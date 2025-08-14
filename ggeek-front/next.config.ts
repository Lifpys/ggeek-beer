import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["localhost", "admin.timebridge.co.kr"],
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "8080", // 포트 번호 추가
        pathname: "/api/download/**",
      },
    ],
  },
  experimental: {
    optimizeCss: true, // CSS 최적화 활성화
  },
  compiler: {
    styledComponents: {
      ssr: true, // SSR 최적화
      displayName: true,
    },
  },
  // CSS 모듈 최적화
  webpack: (config, { dev, isServer }) => {
    if (!dev && !isServer) {
      config.optimization.splitChunks.cacheGroups = {
        ...config.optimization.splitChunks.cacheGroups,
        styles: {
          name: "styles",
          test: /\.(css|scss)$/,
          chunks: "all",
          enforce: true,
        },
      };
    }
    return config;
  },
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "http://admin.timebridge.co.kr/ServletAPI/:path*",
      },
    ];
  },
};

export default nextConfig;
