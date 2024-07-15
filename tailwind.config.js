/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        anotherTag: ["AnotherTag", "sans-serif"], // after you font, add some fonts separated by commas to handle fallback.
      },
      backgroundColor: {
        main: "#242424",
      },
      backgroundSize: {
        fill: "100% 100%",
      },
    },
  },
  plugins: [],
};
