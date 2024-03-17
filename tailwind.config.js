/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: "#2b2c37",
        main: "#635fc7",
        secondary: "#828fa3",
      },
    },
  },
  plugins: [],
};
