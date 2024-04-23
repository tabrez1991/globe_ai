import withPWA from 'next-pwa';

const nextConfig = {
  reactStrictMode: true, 
  swcMinify: true,
  compiler: {
    removeConsole: process.env.NODE_ENV !== "development",
  },
  output: "export",
  pwa: {
    dest: "public", 
    disable: process.env.NODE_ENV === "development",
    register: true,
    skipWaiting: true,
  }
};

module.exports = withPWA(nextConfig);
// module.exports = nextConfig;