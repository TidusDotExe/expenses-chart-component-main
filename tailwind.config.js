/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "soft-red": "hsl(10, 79%, 65%)",
        "cyan": "hsl(186, 34%, 60%)",
        "dark-brown": "hsl(25, 47%, 15%)",
        "medium-brown": "hsl(28, 10%, 53%)",
        "cream": "hsl(27, 66%, 92%)",
        "very-pale-orange": "hsl(33, 100%, 98%)",
      },
      fontFamily: {
        "sans": ["DM Sans", "sans"]
      },
      gridTemplateRows: {
        "110": "repeat(110, 1fr)",
        "100": "repeat(100, 1fr)",
        "40": "repeat(40, 1fr)",
        "60": "repeat(60, 1fr)",
        "25": "repeat(25, 1fr)",
        "30": "repeat(30, 1fr)",
      },
      gridRowEnd: {
        "101": "101",
      },
      height: {
        '30': "30vh",
        "50": "50vh",
      },
      fontSize: {
        "2xs": "0.5rem"
      }
    },
    screens: {
      'desktop': '1440px',
    }
  },
  plugins: [],
}
