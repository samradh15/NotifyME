// tailwind.config.ts
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // --- Color Palette ---
      colors: {
        // Brand Colors (Example: Using shades of blue)
        primary: {
          DEFAULT: '#3B82F6', // blue-500
          light: '#60A5FA',  // blue-400
          dark: '#2563EB',   // blue-600
        },
        secondary: {
          DEFAULT: '#6B7280', // gray-500
          light: '#9CA3AF',  // gray-400
          dark: '#4B5563',   // gray-600
        },
        accent: {
          DEFAULT: '#10B981', // emerald-500
          light: '#34D399',  // emerald-400
          dark: '#059669',   // emerald-600
        },
        // Severity Colors (Crucial for Notifications/Alerts)
        severity: {
          critical: '#EF4444', // red-500
          high:     '#F97316', // orange-500
          medium:   '#EAB308', // yellow-500
          low:      '#0EA5E9', // sky-500
        },
        // Background & Text Colors (Adjust neutrals as needed)
        background: {
          DEFAULT: '#FFFFFF', // White
          alt: '#F9FAFB',     // gray-50
        },
        text: {
          DEFAULT: '#1F2937', // gray-800
          light: '#6B7280',   // gray-500
          inverted: '#FFFFFF', // White
        }
      },
      // --- Typography (Example: using Tailwind's default sans-serif stack) ---
      // fontFamily: {
      //   sans: ['Inter', 'ui-sans-serif', 'system-ui', ...], // Add custom fonts here if needed
      // },
      // --- Spacing/Other Extensions (Add as needed) ---
      // backgroundImage: {
      //   'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      //   'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      // },
    },
  },
  plugins: [],
};
export default config;

