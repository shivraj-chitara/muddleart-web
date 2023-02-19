/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-one": {
          base: "#E1DFF3",
        },
        "primary-two": {
          base: "#25274C",
        },
        "primary-main": {
          base: "#3834F8",
        },
        "secondary-one": {
          base: "#1600F2",
        },
        "secondary-two": {
          base: "#3D8376",
        },
        "secondary-three": {
          base: "#47B2EF",
        },
        "scondary-four": {
          base: "#F6A003",
        },
        "tertiary-one": {
          base: "#F0EFF6",
        },
        "tertiary-two": {
          base: "#25274c0d",
        },
        "tertiary-three": {
          base: "#606A95",
        },
        "tertiary-four": {
          base: "#7B84A6",
        },
      },
      boxShadow: {
        "shadow-1": "20px 20px 40px rgba(27, 28, 44, 0.1)",
      },
    },
    screens: {
      "2xl": { max: "1536px" },
      // => @media (max-width: 1536px) { ... }

      xl: { max: "1280px" },
      // => @media (max-width: 1280px) { ... }

      lg: { max: "1024px" },
      // => @media (max-width: 1024px) { ... }

      md: { max: "768px" },
      // => @media (max-width: 768px) { ... }

      sm: { max: "640px" },
      // => @media (max-width: 640px) { ... }
    },
  },
  plugins: [],
};
