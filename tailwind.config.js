/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,vue}"],
  theme: {
    fontFamily: {
      typewriter: ['"Special Elite"', 'monospace'],
      serif: ['"Lora"', '"Times New Roman"', 'serif'],
      sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
      display: ['"Bebas Neue"', 'sans-serif'],
    },
    extend: {
      colors: {
        ink: '#0a0a0a',
        paper: '#fafafa',
      },
      keyframes: {
        blink: {
          '0%, 50%': { opacity: '1' },
          '51%, 100%': { opacity: '0' },
        },
        typeIn: {
          '0%': { width: '0' },
          '100%': { width: '100%' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'blink': 'blink 1s step-end infinite',
        'type-in': 'typeIn 2s steps(40) forwards',
        'fade-up': 'fadeUp 0.6s ease-out forwards',
      },
    },
  },
  plugins: [],
};
