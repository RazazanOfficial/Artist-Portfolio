import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['artworks-h-a.s3.ir-thr-at1.arvanstorage.ir'], // افزودن دامنه مجاز برای تصاویر
  },
};

export default withNextIntl(nextConfig);
