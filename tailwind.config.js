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
      }
    },
      animation: {
        fadein: "fadein 1s ease-in-out",
      }    
  }
},
  plugins: [],
}
