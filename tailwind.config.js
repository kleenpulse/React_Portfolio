/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {

        slideDown: "slideDown 1s ease forwards",
        loadspin: "loadspin 1.5s linear infinite",
      },
      keyframes: {
        loadspin: {
          "100%": {
            transform: "rotate(360deg)",
          },
        },

        slideDown: {
          "50%": {
            opacity: "0.7",
            transform: "translateY(50)",
          },
          "100%": {
            transform: "translateY(0)",
            opacity: "1",
          },
        },
        fadeOut: {
          "50%": {
            opacity: "0.7",
            transform: "translateY(50)",
          },
          "100%": {
            transform: "translateY(0)",
            opacity: "1",
          },
        },
      },



    },
  },
  plugins: [],
}

