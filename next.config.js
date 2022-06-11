/** @type {import('next').NextConfig} */
// const withBundleAnalyzer = require('@next/bundle-analyzer')({
//   enabled: process.env.ANALYZE === 'true',
// })

const withPreact = require("next-plugin-preact")

module.exports = withPreact({
  swcMinify: true,
  experimental: { esmExternals: false },
  // reactStrictMode: true,
  images: {
    domains: [
      'cdn.discordapp.com',
      'media.discordapp.net',
      'raw.githubusercontent.com',
      'i.scdn.co',
      'avatars.githubusercontent.com',
    ],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  webpack: (config, { dev, isServer }) => {
    // Replace React with Preact only in client production build
    if (!dev && !isServer) {
      Object.assign(config.resolve.alias, {
        react: 'preact/compat',
        // 'react-dom/test-utils': 'preact/test-utils',
        'react-dom': 'preact/compat',
        'react/jsx-runtime': 'preact/jsx-runtime',
      })
    }

    return config
  },
  async rewrites() {
    return [
      {
        source: '/api/pinned-repos',
        destination: 'https://pinned.terabyteis.me/terabyte3',
      },
    ]
  },
})
