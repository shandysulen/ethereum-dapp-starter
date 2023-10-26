// @ts-check
import bundleAnalyzer from "@next/bundle-analyzer";
import { withAxiom } from "next-axiom";

const withBundleAnalyzer = bundleAnalyzer({
  enabled: !!process.env.ANALYZE,
});

/** @type {import("next").NextConfig} */
const config = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
        pathname: "/**",
      },
    ],
  },
  experimental: {
    typedRoutes: false,
    swcPlugins: [["next-superjson-plugin", {}]],
    serverComponentsExternalPackages: ["@libsql/client", "pino"],
    logging: {
      level: "verbose",
      fullUrl: true,
    },
  },
};
export default withAxiom(withBundleAnalyzer(config));
