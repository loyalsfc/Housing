/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'dm-sans': ['DM Sans', 'sans-serif'],
        'poppin': ['Poppins', 'sans-serif'],
        'manrope': ['Manrope', 'sans-serif'],
      },
      boxShadow:{
        '4xl': '0px 0px 18px 3px rgba(0, 0, 0, 0.25)',
        '5xl': '0px 12px 19px rgba(0, 0, 0, 0.15)',
        '6xl': '5px 24px 53px rgba(0, 0, 0, 0.25)',
        '7xl': '0px 34.0693px 36.1986px rgba(0, 0, 0, 0.133714)',
        '8xl': '0px 4px 63px rgba(0, 0, 0, 0.15)'
      },
      colors:{
        orange: '#F4511E',
        muted: '#BDBDBD'
      },
    },
  },
  plugins: [],
}
