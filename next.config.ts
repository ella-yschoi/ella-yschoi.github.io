import type { NextConfig } from 'next';
/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  output: 'export', // next export
  images: { unoptimized: true }, // next/image 정적 빌드
  trailingSlash: true, // GitHub Pages에서 경로 깨짐 방지에 유리
  basePath: '/portfolio',
  assetPrefix: '/portfolio',
  env: {
    NEXT_PUBLIC_BASE_PATH: isProd ? '/portfolio' : '',
  },
};

export default nextConfig;
