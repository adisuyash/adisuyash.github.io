/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  assetPrefix: "/",
  images: {
    unoptimized: true,
  },
  experimental: {
    esmExternals: "loose",
  },
};

module.exports = nextConfig;
