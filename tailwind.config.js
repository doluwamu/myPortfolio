/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "1000px",
      xl: "1440px",
    },

    extend: {
      colors: {
        green: "hsla(191, 88%, 37%, 1)",
        darkGrey: "hsla(0, 0%, 17%, 1)",
        lightGrey: "hsla(0, 0%, 97%, 1)",
      },
    },
  },
  plugins: [],
};
