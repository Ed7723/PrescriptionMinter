/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    colors:{
    'brightBlue':'#118df0',
    'lightBlue':'#41a4f3',
    'darkBlue':'#0c71c2',
    'veryLightBlue':'#71bbf6',
    'whiteOne':'#ffffff',
    'lightGrey':'#e6e6e6',
    'darkGrayishBlue': 'hsl(227, 12%, 55%)',
    },
    extend: {},
  },
  plugins: [],
}