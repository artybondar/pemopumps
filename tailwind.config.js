/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          800: '#0A1628',
          900: '#060E1A',
        },
        copper: {
          400: '#E8A87C',
          500: '#D4865E',
          600: '#B86A42',
        },
        slate: {
          200: '#E2E8F0',
          400: '#94A3B8',
          800: '#1E293B',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Orbitron', 'sans-serif'],
      },
      backgroundImage: {
        'hero-gradient': 'radial-gradient(ellipse at center, rgba(212, 134, 94, 0.15) 0%, transparent 70%)',
        'card-gradient': 'linear-gradient(145deg, rgba(30, 41, 59, 0.7) 0%, rgba(15, 23, 42, 0.9) 100%)',
      },
      boxShadow: {
        'glow': '0 0 40px rgba(212, 134, 94, 0.15)',
        'glow-hover': '0 0 60px rgba(212, 134, 94, 0.25)',
      },
    },
  },
  plugins: [],
};