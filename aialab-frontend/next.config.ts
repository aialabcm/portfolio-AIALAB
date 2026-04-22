import type { NextConfig } from "next";
import createNextIntlPlugin from 'next-intl/plugin';

// next-intl v4: default config path is './i18n/request.ts'
const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cms.aialabcmr.com',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
};

export default withNextIntl(nextConfig);
