/** @type {import('next').NextConfig} */
const nextConfig = {
  turbopack: {
    resolveAlias: {
      // Ensure these aliases match your tsconfig.json paths
      "@/*": "./src/*",
      // Add more aliases here if needed.
    },
  },
  // ... any other existing configurations
};

export default nextConfig; // Or module.exports = nextConfig; for .js file
