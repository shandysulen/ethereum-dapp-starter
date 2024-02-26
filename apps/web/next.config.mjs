// @ts-check
import bundleAnalyzer from "@next/bundle-analyzer";
import "./src/env.mjs";

const withBundleAnalyzer = bundleAnalyzer({
  enabled: !!process.env.ANALYZE,
});

/** @type {import("next").NextConfig} */
const config = {
  transpilePackages: ["@eds/components"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
        pathname: "/**",
      },
    ],
  },
  webpack: (config) => {
    // https://docs.family.co/connectkit/getting-started#getting-started-nextjs
    config.resolve.fallback = { fs: false, net: false, tls: false };
    return config;
  },
};
export default withBundleAnalyzer(config);
