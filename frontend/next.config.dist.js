/** @type {import('next').NextConfig} */

module.exports = {
  swcMinify: false,
  presets: ["next/babel"],
  env: {
    MODE: "mock", //"mock" "prod"
  },
  async rewrites() {
    return [
      {
        source: "/server/:path*",
        destination: "http://localhost:3001/:path*",
      },
    ];
  },
};
