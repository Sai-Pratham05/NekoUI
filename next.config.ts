import { createMDX } from 'fumadocs-mdx/next';
import { NextConfig } from 'next';

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const nextConfig:NextConfig = {
  reactStrictMode:true,
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "postimg.cc",
      },
      {
        protocol: "https",
        hostname: "i.postimg.cc",
      },
    ],
  },
};

export default withMDX(nextConfig);
