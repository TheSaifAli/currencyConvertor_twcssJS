/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      keyframes:{
        showMsgAnime:{
          'from':{
            opacity:'0',
            top:'-2%'
          },
          'to':{
            opacity:'1',
            top:'0'
          }
        },
        exitMsgAnime:{
          'from':{
            opacity:'1',
            top:'0'
          },
          'to':{
            opacity:'0',
            top:'-20px'
          }
        }
      },
    },
  },
  plugins: [],
}

