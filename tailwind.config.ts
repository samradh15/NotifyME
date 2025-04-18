// tailwind.config.ts
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  // darkMode: 'class', // Optional: Keep if you plan a light/dark toggle later
  theme: {
    extend: {
      // --- Dark Theme Color Palette ---
      colors: {
        // Main background and surface colors
        background: {
          DEFAULT: '#18181b', // dark neutral (zinc-900)
          alt: '#27272a',     // slightly lighter dark (zinc-800)
        },
        surface: { // For cards, headers, footers etc.
          DEFAULT: '#27272a', // zinc-800
          alt: '#3f3f46',     // zinc-700
        },
        // Text colors
        text: {
          DEFAULT: '#f4f4f5', // light text (zinc-100)
          light: '#a1a1aa',   // muted text (zinc-400)
          inverted: '#18181b', // dark text (zinc-900)
        },
        // Accent and brand colors (Keeping previous definitions)
        primary: {
          DEFAULT: '#3B82F6', // blue-500
          light: '#60A5FA',  // blue-400
          dark: '#2563EB',   // blue-600
        },
        accent: {
          DEFAULT: '#10B981', // emerald-500
          light: '#34D399',  // emerald-400
          dark: '#059669',   // emerald-600
        },
        // Severity Colors (Keeping previous definitions)
        severity: {
          critical: '#EF4444', // red-500
          high:     '#F97316', // orange-500
          medium:   '#EAB308', // yellow-500
          low:      '#0EA5E9', // sky-500
        },
        // Other utility colors
        border: '#3f3f46', // zinc-700 (for subtle borders)
        card: '#27272a',     // zinc-800 (explicit card background)
      },
      // --- Typography/Other Extensions ---
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
      },
    },
  },
  plugins: [],
};
export default config;
