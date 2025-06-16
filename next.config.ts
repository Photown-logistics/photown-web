import type { NextConfig } from "next";


const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export', // Important for static HTML export
  distDir: 'output', // Custom output directory
  trailingSlash: true, // Ensures routes become `/about/` instead of `/about`
  assetPrefix: isProd ? '/photown-web/' : '',
  basePath: isProd ? '/photown-web' : '',

};

export default nextConfig;
