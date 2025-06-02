// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        // Apply this header to all API routes (or adjust the `source` to match only specific paths)
        source: '/api/:path*',
        headers: [
          {
            key: 'Access-Control-Allow-Origin',
            value: '*', // or restrict to e.g. 'https://your-domain.com'
          },
        ],
      },
      {
        // If you serve any images from `/public` that are fetched cross‐origin, you can also allow them:
        source: '/images/:path*',
        headers: [
          {
            key: 'Access-Control-Allow-Origin',
            value: '*',
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
