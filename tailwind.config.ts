import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#6C5CE7',
        secondary: '#A29BFE',
        accent: '#FF6B6B',
        orange: '#FF8F5E',
        purple: '#2D1B4E',
        purpleDark: '#1e1435',
        light: '#F5F5FF',
        gray: '#64748B',
        success: '#00D9A3',
        pink: '#FF6B9D',
      },
    },
  },
  plugins: [],
};
export default config;
