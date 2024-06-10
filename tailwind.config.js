/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        'bill': {
          'cyan':'#00c0c4',
          'yellow':'#f8dd35',
          'magenta':'#ff2273',
        },
      },
      transitionProperty: {
        'top': 'top',
        'bottom': 'bottom',
        'height': 'height',
      },
      dropShadow: {
        'bill-magenta-bl': '-2px 3px 0 #ff2273',
        'bill-black-bl': '-2px 3px 0 #000',
        'bill-magenta-b': '0 3px 0 #ff2273',
        'bill-black-b': '0 3px 0 #000',
        'bill-black-flat': '0 0 1px #000',
      }
    },
  },
  plugins: [],
}

