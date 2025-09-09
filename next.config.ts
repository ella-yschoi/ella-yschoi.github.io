import type { NextConfig } from 'next';
/** @type {import('next').NextConfig} */

const nextConfig: NextConfig = {
  output: 'export', // next export
  images: { unoptimized: true }, // next/image 정적 빌드
  trailingSlash: true, // GitHub Pages에서 경로 깨짐 방지에 유리
  basePath: '/portfolio',
  assetPrefix: '/portfolio',
};

export default nextConfig;
