const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    removeConsole: process.env.NODE_ENV !== "development",
  },
  output: "export",
  images: { unoptimized: true }
};

// const withPWA = require("next-pwa")({
//   dest: "public", 
//   disable: process.env.NODE_ENV === "development",
//   register: true,
//   skipWaiting: true,
// });
// module.exports = withPWA(nextConfig);
module.exports = nextConfig;