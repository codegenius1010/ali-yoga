import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: '**.aliyoga.com',
      },
    ],
  },
  redirects: async () => {
    return [
      {
        source: '/about-me',
        destination: '/about',
        permanent: true,
      },
      {
        source: '/classes',
        destination: '/yoga-for-golfers',
        permanent: true,
      },
      {
        source: '/member-site-homepage-1',
        destination: '/online-courses',
        permanent: true,
      },
      // Add any additional old URLs here
    ];
  },
};

export default nextConfig;