import type { NextConfig } from 'next';
/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';
const repo = '/portfolio';

const nextConfig: NextConfig = {
  output: 'export',
  images: { unoptimized: true },
  trailingSlash: true,
  basePath: isProd ? repo : '',
  assetPrefix: isProd ? `${repo}/` : '',
};

export default nextConfig;
