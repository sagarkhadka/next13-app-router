/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}'
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1536px'
      }
    },
    extend: {
      colors: {
        dark: '#1a1c20',
        'ash-gray': '#edeff1',
        'light-gray': '#9598a4',
        text: '#fafafa',
        background: '#050505',
        primary: '#c6b4e4',
        secondary: '#160e25',
        accent: '#aa8ed7'
      },
      fontFamily: {
        manrope: ['Manrope', 'sans-serif'],
        sora: ['Sora', 'sans-serif']
      },
      keyframes: {
        'accordion-down': {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' }
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 }
        }
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out'
      }
    }
  },
  plugins: [require('tailwindcss-animate')]
}
