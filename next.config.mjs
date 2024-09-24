/** @type {import('next').NextConfig} */

import withMDX from '@next/mdx';

const nextConfig = withMDX({
  options: {
    // MDX options can be added here if needed
  },
})({
  // Next.js config
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
  transpilePackages: ['framer-motion'],
});

export default nextConfig;
