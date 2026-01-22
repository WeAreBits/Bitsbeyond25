import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  allowedDevOrigins: ['http://192.168.88.251:3000', 'http://192.168.1.253:3000', 'http://192.168.100.2:3000', 'http://*:3000'],
};

export default nextConfig;
