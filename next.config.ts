import type { NextConfig } from "next";


const isProduction = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  /* config options here */
  basePath: isProduction ? "/photown-web" : "",
  output: "export",
  distDir: "out",
  trailingSlash: true,
};

export default nextConfig;
