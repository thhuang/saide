/** @type {import('tailwindcss').Config} */
export default {
  mode: 'jit',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        white: '#f8f8ff',
        black: '#1f2335',
        blue: '#22b7eb',
        grey: '#545c7e',
        background: '#1a1b26',
        'background-darker': '#16161e',
      },
    },
  },
  plugins: [],
};
