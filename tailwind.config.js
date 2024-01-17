/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'basic-blue': '#3dcbfa',
        'hover-blue' : '#37a6fa',
        'kakao-yellow' : '#ffe23d',
        'kakao-black' : '#463a48',
        'kakao-hover' : '#ffcc33',
        'heart' : '#f70019',
        'none-button' : '#f5f5f5',
        'none-text' : '#cbcbcb',
      },
      spacing : {
        '90vh' : '90vh',
        '90vw' : '90vw',
        '80vh' : '80vh',
        '600' : '600px'
      },
      minWidth : {
        '260' : '260px'
      }
    },
  },
  plugins: [],
}

