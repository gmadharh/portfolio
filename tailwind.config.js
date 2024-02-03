/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,vue}'],
  theme: {
    fontFamily: {
      roboto: ['Roboto', 'sans-serif'],
      lora: ['Lora', 'serif'],
    },
    colors: {
      'royal-purple': '#2c061f',
      goldish: '#e1d89f',
    },
    extend: {},
  },
  plugins: [],
}
