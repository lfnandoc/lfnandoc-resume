/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
    },
    keyframes: {
      fadein: {
        "0%": {
          opacity: 0,
        },
        "100%": {
          opacity: 1,
        },
      },
      grow: {
        "0%": {
          width: "0%",
        }
      }

    },
      animation: {
        fadein: "fadein 1s ease-in-out",
        grow: "grow 1s ease-in-out",
      },
      screens: {
        betterhover: {'raw': '(hover: hover)'},
    }
  }
},
  plugins: [],
}
