/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xsm: { min: "200px", max: "479.99px" },
      sm: { min: "480px", max: "767.99px" },
      md: "768px",
      lg: "1000px",
      xl: "1440px",
    },

    extend: {
      colors: {
        green: "hsla(198, 93%, 60%, 1)",
        darkGrey: "hsla(0, 0%, 17%, 1)",
        lightGrey: "hsl(0, 0%, 89%)",
        subGrey: "hsla(0, 0%, 97%, 1)",
      },
    },
  },
  plugins: [],
};
