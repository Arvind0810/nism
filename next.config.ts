import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cacheComponents: true,
  // X-A pages moved under /xa when the app became multi-exam; keep old bookmarks working.
  redirects() {
    return [
      { source: "/chapters", destination: "/xa/chapters", permanent: true },
      { source: "/chapters/:path*", destination: "/xa/chapters/:path*", permanent: true },
      { source: "/mock-test", destination: "/xa/mock-test", permanent: true },
      { source: "/videos/:id", destination: "/xa/videos/:id", permanent: true },
    ];
  },
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
