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
        // Design system spacing scale
        'space-1': '0.25rem',  // 4px
        'space-2': '0.5rem',   // 8px
        'space-3': '0.75rem',  // 12px
        'space-4': '1rem',     // 16px
        'space-6': '1.5rem',   // 24px
        'space-8': '2rem',     // 32px
        'space-12': '3rem',    // 48px
        'space-16': '4rem',    // 64px
      },
      fontSize: {
        // Desktop Typography Scale
        'display': ['4rem', { lineHeight: '1.2' }],     // 64px
        'h1': ['3rem', { lineHeight: '1.25' }],         // 48px
        'h2': ['2.25rem', { lineHeight: '1.3' }],       // 36px
        'h3': ['1.75rem', { lineHeight: '1.4' }],       // 28px
        'body': ['1rem', { lineHeight: '1.5' }],        // 16px
        'small': ['0.875rem', { lineHeight: '1.5' }],   // 14px
      },
      borderRadius: {
        'button': '0.5rem',      // Buttons
        'card': '1rem',          // Cards
        'input': '0.375rem',     // Form inputs
        'avatar': '9999px',      // Circular elements
      },
      transitionDuration: {
        'default': '300ms',      // Default transitions
        'slow': '500ms',         // Slower animations
        'fast': '150ms',         // Quick feedback
      },
      transitionTimingFunction: {
        'bounce': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      animation: {
        'fade-in': 'fadeIn 0.3s ease-in-out',
        'slide-up': 'slideUp 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
        'slide-down': 'slideDown 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      boxShadow: {
        'card': '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
        'hover': '0 25px 30px -5px rgba(0, 0, 0, 0.15)',
        'button': '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
      },
      maxWidth: {
        '7xl': '80rem',  // 1280px - For main content
        '8xl': '88rem',  // 1408px - For wider layouts
      },
    },
  },
  plugins: [],
}

export default config