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
    animation :{
      'shiny' : 'animation: getShiny 2s ease infinite'
    },

    extend: {
      colors : {
        DarkText: 'hsl(229, 25%, 31%)',
        ScoreText: 'hsl(229, 64%, 46%)',
        HeaderOutline: 'hsl(217, 16%, 45%)'
      },
      keyframes :{
        getShiny : {
          '0%, 100%': {
            boxShadow : "0 0 0 20px rgba(255, 255, 255, .2), 0 0 0 50px rgba(255, 255, 255, .1), 0 0 0 90px rgba(255, 255, 255, .05)"
          },
          '50%': {
            boxShadow : "0 0 0 30px rgba(255, 255, 255, .2), 0 0 0 70px rgba(255, 255, 255, .1), 0 0 0 120px rgba(255, 255, 255, .05)"
          }
        }
      }
    },
  },
  plugins: [],
}
