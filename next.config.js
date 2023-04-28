const { withSentryConfig } = require('@sentry/nextjs');

const sentryWebpackPluginOptions = {
  org: 'f-x-frontend',
  project: 'f-x-frontend-qm',

  silent: true, // Suppresses all logs
};

module.exports = withSentryConfig(
  {
    webpack: (config, options) => {
      // 소스맵을 비활성화
      config.devtool = false;

      return config;
    },

    // Next.js 설정
    reactStrictMode: true,
    async rewrites() {
      return [
        {
          source: '/admin',
          destination: '/admin/entry',
        },
      ];
    },
    //vercel 연결
    // Sentry 설정
    sentry: {
      disableServerWebpackPlugin: true,
      disableClientWebpackPlugin: true,
      tunnelRoute: '/monitoring-tunnel',
      hideSourceMaps: true,
    },
  },
  sentryWebpackPluginOptions
);
