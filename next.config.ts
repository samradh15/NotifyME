/** @type {import('next').NextConfig} */
const nextConfig = {
  // Add this experimental block if using Turbopack
  experimental: {
    turbo: {
      resolveAlias: {
        // Ensure these aliases match your tsconfig.json paths
        // Map '@/*' to './src/*'
        "@/*": "./src/*",
        // You could add more specific ones if needed, but '@/*' should cover it
        // "@/components/*": "./src/components/*",
        // "@/lib/*": "./src/lib/*",
      },
    },
  },
  // ... any other existing configurations
};

export default nextConfig; // Or module.exports = nextConfig; for .js file
