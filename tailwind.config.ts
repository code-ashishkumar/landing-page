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
        primary: '#5272ad',
        secondary: '#5272ad',
        accent: '#5272ad',
        orange: '#5272ad',
        purple: '#5272ad',
        purpleDark: '#3e5682',
        light: '#F5F5FF',
        gray: '#64748B',
        success: '#5272ad',
        pink: '#5272ad',
      },
    },
  },
  plugins: [],
};
export default config;
