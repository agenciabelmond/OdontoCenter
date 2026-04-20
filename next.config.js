/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/urgencia",
        destination: "/urgencia/index.html",
      },
    ];
  },
};

module.exports = nextConfig;