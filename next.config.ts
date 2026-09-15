import type { NextConfig } from "next";
import webpack from "webpack";

// GitHub Pages project-page path — set NEXT_PUBLIC_BASE_PATH in the deploy
// workflow (e.g. "/O-R-G-dapp-public-preview") so assets resolve correctly
// under https://drasticstatic.github.io/O-R-G-dapp-public-preview/
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  images: { unoptimized: true },
  // @coinbase/cdp-sdk (pulled in transitively by wagmi's Coinbase connector,
  // via RainbowKit) ships optional dynamic imports for packages that aren't
  // installed (@x402/*). They're never actually reached at runtime, but
  // webpack still tries to resolve them during the SSR build — ignore them.
  webpack: (config) => {
    config.plugins.push(
      new webpack.IgnorePlugin({
        resourceRegExp: /^@x402\//,
      })
    );
    return config;
  },
};

export default nextConfig;
