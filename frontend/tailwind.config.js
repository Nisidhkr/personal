/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Soft pastel palette inspired by Julia Huang
        pink: {
          50: '#FCE7EC',
          100: '#FADADD',
          200: '#F6D4D9',
          300: '#F2C7CC',
          400: '#F4B6AE',
          500: '#F5A9A4',
          600: '#E67D87',
          700: '#D96C76',
          800: '#C55A64',
          900: '#B04852',
        },
        'witish-pink': '#FADADD',
        'cream-bg': '#FCE7EC',
        'peach-pink': '#F4B6AE',
        'warm-pink': '#F5A9A4',
        'charcoal': '#222222',
        'muted-text': '#6B5A5A',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 8s ease-in-out infinite',
        'float-slower': 'float 10s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0) translateX(0)' },
          '25%': { transform: 'translateY(-20px) translateX(10px)' },
          '50%': { transform: 'translateY(-40px) translateX(-10px)' },
          '75%': { transform: 'translateY(-20px) translateX(5px)' },
        }
      }
    },
  },
  plugins: [],
}

