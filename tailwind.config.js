/** @type {import('tailwindcss').Config} */
module.exports = {
  content:
  [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme:
  {
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
      roboto: ["Roboto", "sans-serif"],
      montserrat: ["Montserrat", "sans-serif"],
    },
    extend:
    {
      dropShadow:
      {
        '2xl': '0 35px 35px rgba(27.0, 189.0, 187.0, 0.8)',
        '4xl':
        [
          '0 35px 35px rgba(0, 0, 0, 0.25)',
          '0 45px 65px rgba(0, 0, 0, 0.15)'
        ]
      },
      colors:
      {
        'teal': '#1bbdbb',
        'white': '#ffffff',
      },
    },
  },
  plugins: [],
}

