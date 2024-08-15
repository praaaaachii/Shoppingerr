/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'files.stripe.com'
          },
        ],
      },
      reactStrictMode: false,
      eslint: {
        ignoreDuringBuilds: true,
      },
};

export default nextConfig;

