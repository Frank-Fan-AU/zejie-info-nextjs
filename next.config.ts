import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  images: {
    domains: [
      'images.ctfassets.net'  // 添加 Contentful 的图片域名
    ],
  },
  /* config options here */
  transpilePackages: ['next-mdx-remote'],
};

export default nextConfig;
