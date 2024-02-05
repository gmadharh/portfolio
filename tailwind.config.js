/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,vue}"],
  theme: {
    fontFamily: {
      roboto: ["Roboto", "sans-serif"],
      lora: ["Lora", "serif"],
    },
    extend: {
      keyframes: {
        fadeOutIn: {
          "0%": { opacity: "0" },
          "45%": { opacity: "1" },
          "55%": { opacity: "1" },
          "100%": { opacity: "0" },
        },
      },
      animation: {
        "fade-out-in": "fadeOutIn 2.5s forwards",
      },
    },
  },
  plugins: [],
};
