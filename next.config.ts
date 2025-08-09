import type { NextConfig } from "next";

export const repoName = 'portfolio';
const nextConfig: NextConfig = {
  /* config options here */
  distDir: './out',
  output: 'export',
  basePath: `/${repoName}`,
};

export default nextConfig;
