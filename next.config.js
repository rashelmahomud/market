/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["i.ibb.co"],

    // remotePatterns: [
    //   {
    //     protocol: "https",
    //     hostname: "i.ibb.co",
    //   },
    // ],
  },
};

module.exports = nextConfig;
