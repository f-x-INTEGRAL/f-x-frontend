// This file sets a custom webpack configuration to use your Next.js app
// with Sentry.
// https://nextjs.org/docs/api-reference/next.config.js/introduction
// https://docs.sentry.io/platforms/javascript/guides/nextjs/manual-setup/
const { withSentryConfig } = require('@sentry/nextjs');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  sentry: {
    tunnelRoute: '/monitoring-tunnel',
  },
  async rewrites() {
    return [
      {
        source: '/admin',
        destination: '/admin/entry',
      },
    ];
  },
};
const sentryWebpackPluginOptions = {
  org: 'f-x-frontend',
  project: 'f-x-frontend-qm',
  silent: true, // Suppresses all logs
};
module.exports = withSentryConfig(
  module.exports,
  { silent: true },
  { productionBrowserSourceMaps: false },
  { hideSourcemaps: true }
);

module.exports = withSentryConfig(nextConfig, sentryWebpackPluginOptions);
