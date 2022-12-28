/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens : {
      sm : '375',
      md : '768',
      lg : '976px',
      xl : '1440px'
    },
    fontFamily : {
      'Default' : ['Barlow Semi Condensed', 'sans-serif']
    },
    extend: {
      colors : {
        DarkText: 'hsl(229, 25%, 31%)',
        ScoreText: 'hsl(229, 64%, 46%)',
        HeaderOutline: 'hsl(217, 16%, 45%)'
      }
    },
  },
  plugins: [],
}
