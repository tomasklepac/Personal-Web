/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',

  images: {
    unoptimized: true, // Required for static export
  },

  // Modern JavaScript transpilation targets
  compiler: {
    // Remove console.log in production
    removeConsole: process.env.NODE_ENV === 'production' ? {
      exclude: ['error', 'warn'],
    } : false,
  },

  // Optimize for modern browsers (ES2020+)
  // This reduces bundle size by not transpiling modern JS features
  experimental: {
    // Enable modern build optimizations
    optimizeCss: true,
    // Tree-shake react-icons to only include used icons
    optimizePackageImports: ['react-icons'],
  },

  // Reduce bundle size
  productionBrowserSourceMaps: false,
};

export default nextConfig;
