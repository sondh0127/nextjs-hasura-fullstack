/* eslint-disable @typescript-eslint/no-var-requires */

// const withBundleAnalyzer = require('@next/bundle-analyzer')({
//   enabled: process.env.ANALYZE === 'true',
// })
const withPlugins = require('next-compose-plugins')
const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
})
// next.js configuration
const nextConfig = {
  // https://nextjs.org/docs/api-reference/next.config.js/react-strict-mode
  reactStrictMode: true,
}

module.exports = withPlugins(
  [
    [
      withMDX,
      {
        pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
      },
    ],
  ],
  nextConfig,
)
