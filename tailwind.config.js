const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        brand: "#2baaff",
      },
    },
    screens: {
      xs: "470px",
      ...defaultTheme.screens,
    },
    fontFamily: {
      mono: ["monospace", "sans-serif"],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
