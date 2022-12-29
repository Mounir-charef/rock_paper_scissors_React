/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html', "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens : {
      small : {'max': '480px'},
      medium : {'max': '768px'},
      sm : '375px',
      md : '768px',
      lg : '976px',
      xl : '1440px'
    },
    fontFamily : {
      'sans' : ['"Barlow Semi Condensed"', 'sans-serif']
    },
    lineHeight : {
      'extraSmall' : '0.8'
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
