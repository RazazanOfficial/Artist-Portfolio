import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['picsum.photos'], // افزودن دامنه مجاز برای تصاویر
  },
};

export default withNextIntl(nextConfig);
