import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        // Primary Colors
        'brand-teal': '#0D9488', // Rich Teal - Sophistication and innovation
        'brand-slate': '#475569', // Slate Blue - Reliability and professionalism
        'brand-white': '#F8FAFC', // Pearl White - Elegance and space
        
        // Secondary Colors
        'accent-yellow': '#F59E0B', // Golden Yellow - Energy and calls to action
        'accent-rose': '#F43F5E',   // Rose - Visual interest and excitement
        'deep-gray': '#27272A',     // Deep Gray - Contrast and depth
      },
      spacing: {
        'section': '6rem',
      },
    },
  },
  plugins: [],
}

export default config