/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '475px',     // Extra small devices
        'sm': '640px',     // Small devices (default)
        'md': '768px',     // Medium devices (default)
        'lg': '1024px',    // Large devices (default)
        'xl': '1280px',    // Extra large devices (default)
        '2xl': '1536px',   // 2X large devices (default)
        '3xl': '1920px',   // Ultra wide displays
      },
      colors: {
        primary: {
          black: '#0a0a0a',
          white: '#ffffff',
          red: '#ff0000',
          yellow: '#ffd700',
          green: '#00ff00',
        },
        gray: {
          50: '#f9fafb',
          100: '#f3f4f6',
          200: '#e5e7eb',
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#6b7280',
          600: '#4b5563',
          700: '#374151',
          800: '#1f2937',
          900: '#111827',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
        mono: ['var(--font-jetbrains-mono)', 'ui-monospace', 'SFMono-Regular', 'Monaco', 'Consolas', 'monospace'],
        heading: ['var(--font-inter)', 'system-ui', '-apple-system', 'sans-serif'],
        body: ['var(--font-inter)', 'system-ui', '-apple-system', 'sans-serif'],
        inter: ['var(--font-inter)', 'system-ui', '-apple-system', 'sans-serif'],
        jetbrains: ['var(--font-jetbrains-mono)', 'ui-monospace', 'SFMono-Regular', 'Monaco', 'Consolas', 'monospace'],
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
        '7xl': ['4.5rem', { lineHeight: '1' }],
        '8xl': ['6rem', { lineHeight: '1' }],
        '9xl': ['8rem', { lineHeight: '1' }],
        // Fluid typography sizes using clamp()
        'fluid-xs': ['clamp(0.75rem, 0.5vw + 0.5rem, 0.875rem)', { lineHeight: '1.2' }],
        'fluid-sm': ['clamp(0.875rem, 0.75vw + 0.625rem, 1rem)', { lineHeight: '1.3' }],
        'fluid-base': ['clamp(1rem, 1vw + 0.75rem, 1.125rem)', { lineHeight: '1.4' }],
        'fluid-lg': ['clamp(1.125rem, 1.25vw + 0.875rem, 1.5rem)', { lineHeight: '1.4' }],
        'fluid-xl': ['clamp(1.25rem, 1.5vw + 1rem, 1.875rem)', { lineHeight: '1.3' }],
        'fluid-2xl': ['clamp(1.5rem, 2vw + 1.25rem, 2.25rem)', { lineHeight: '1.2' }],
        'fluid-3xl': ['clamp(1.875rem, 2.5vw + 1.5rem, 3rem)', { lineHeight: '1.1' }],
        'fluid-4xl': ['clamp(2.25rem, 3vw + 1.75rem, 3.75rem)', { lineHeight: '1' }],
        'fluid-5xl': ['clamp(2.5rem, 4vw + 2rem, 4.5rem)', { lineHeight: '1' }],
        'fluid-6xl': ['clamp(3rem, 5vw + 2.5rem, 6rem)', { lineHeight: '1' }],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
        '144': '36rem',
      },
      animation: {
        'blink': 'blink 1s infinite',
        'glitch': 'glitch 0.5s infinite',
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-down': 'slideDown 0.5s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out',
      },
      keyframes: {
        blink: {
          '0%, 50%': { opacity: '1' },
          '51%, 100%': { opacity: '0' },
        },
        glitch: {
          '0%': { transform: 'translate(0)' },
          '20%': { transform: 'translate(-2px, 2px)' },
          '40%': { transform: 'translate(-2px, -2px)' },
          '60%': { transform: 'translate(2px, 2px)' },
          '80%': { transform: 'translate(2px, -2px)' },
          '100%': { transform: 'translate(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.9)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "grid-pattern": "linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px)",
      },
      backdropBlur: {
        xs: '2px',
      },
      aspectRatio: {
        '4/3': '4 / 3',
        '3/2': '3 / 2',
        '2/3': '2 / 3',
        '9/16': '9 / 16',
      },
      zIndex: {
        '60': '60',
        '70': '70',
        '80': '80',
        '90': '90',
        '100': '100',
      },
      transitionDuration: {
        '2000': '2000ms',
        '3000': '3000ms',
      },
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
        'bounce-in': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
      },
      boxShadow: {
        'terminal': '0 0 0 2px #ff0000, 4px 4px 0 0 #ffff00',
        'terminal-hover': '0 0 0 2px #ffff00, 6px 6px 0 0 #ff0000',
        'glow-red': '0 0 20px rgba(255, 0, 0, 0.5)',
        'glow-yellow': '0 0 20px rgba(255, 255, 0, 0.5)',
      },
      minHeight: {
        'screen-safe': ['100vh', '100dvh'],
      },
      maxWidth: {
        '8xl': '88rem',
        '9xl': '96rem',
        // Reduced container sizes for more compact layout
        'xs': '20rem',
        'sm': '24rem', 
        'md': '28rem',
        'lg': '32rem',
        'xl': '36rem',
        '2xl': '42rem',
        '3xl': '48rem',
        '4xl': '56rem',
        '5xl': '64rem',
        '6xl': '72rem',
        '7xl': '80rem',
      },
    },
  },
  plugins: [
    // Custom plugin for responsive utilities
    function({ addUtilities, theme }) {
      const newUtilities = {
        '.text-shadow-terminal': {
          'text-shadow': '2px 2px 0 #ff0000',
        },
        '.text-shadow-glow': {
          'text-shadow': '0 0 10px currentColor',
        },
        '.container-responsive': {
          'width': '100%',
          'margin-left': 'auto',
          'margin-right': 'auto',
          'padding-left': '1rem',
          'padding-right': '1rem',
          '@screen sm': {
            'padding-left': '1.5rem',
            'padding-right': '1.5rem',
          },
          '@screen lg': {
            'padding-left': '2rem',
            'padding-right': '2rem',
          },
        },
        '.touch-manipulation': {
          'touch-action': 'manipulation',
        },
        '.scrollbar-terminal': {
          'scrollbar-width': 'thin',
          'scrollbar-color': '#ff0000 #0a0a0a',
          '&::-webkit-scrollbar': {
            'width': '8px',
          },
          '&::-webkit-scrollbar-track': {
            'background': '#0a0a0a',
          },
          '&::-webkit-scrollbar-thumb': {
            'background': '#ff0000',
            'border-radius': '0',
          },
          '&::-webkit-scrollbar-thumb:hover': {
            'background': '#ffff00',
          },
        },
      }
      addUtilities(newUtilities)
    },
  ],
}; 