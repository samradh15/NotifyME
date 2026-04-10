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
      colors: {
        background: {
          DEFAULT: '#000000',
          alt: '#050505',
        },
        surface: {
          DEFAULT: '#080808',
          alt: '#111111',
        },
        text: {
          DEFAULT: '#ffffff',
          light: '#a1a1aa',
          inverted: '#000000',
        },
        primary: {
          DEFAULT: '#2563eb', // Enterprise blue
          light: '#3b82f6',
          dark: '#1d4ed8',
        },
        accent: {
          DEFAULT: '#3f3f46',
          light: '#52525b',
          dark: '#27272a',
        },
        severity: {
          critical: '#ef4444',
          high: '#f97316',
          medium: '#eab308',
          low: '#3b82f6',
        },
        border: '#18181b', // very subtle border (zinc-900)
        card: '#0a0a0a',
      },
      fontFamily: {
        sans: ['var(--font-manrope)', 'ui-sans-serif', 'system-ui'],
        display: ['var(--font-sora)', 'ui-sans-serif', 'system-ui'],
      },
    },
  },
  plugins: [],
};
export default config;
