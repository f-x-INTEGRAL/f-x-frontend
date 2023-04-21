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
};
const sentryWebpackPluginOptions = {
  // Additional config options for the Sentry Webpack plugin. Keep in mind that
  // the following options are set automatically, and overriding them is not
  // recommended:
  //   release, url, authToken, configFile, stripPrefix,
  //   urlPrefix, include, ignore

  org: 'f-x-frontend',
  project: 'f-x-frontend-qm',

  silent: true, // Suppresses all logs

  // For all available options, see:
  // https://github.com/getsentry/sentry-webpack-plugin#options.
};

module.exports = withSentryConfig(
  module.exports,
  { silent: true },
  { hideSourcemaps: true }
);

module.exports = withSentryConfig(nextConfig, sentryWebpackPluginOptions);
