/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './layouts/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      white: '#fff',
      black: '#000',
      gray: {
        100: '#F8F8F8',
        200: '#F5F5F5',
        300: '#DBDCE0',
        400: '#AAAAAA',
        500: '#848695',
        600: '#665674',
        700: '#3C3640',
      },
      blue: {
        100: '#E9F1FF',
        200: '#0356DD',
        300: '#000B6F',
      },
      purple: {
        100: '#613AFF',
        200: '#8A03DD',
        300: '#6C4A8A',
      },
      pink: {
        100: '#FFE9F1',
        200: '#FF7F8E',
        300: '#FF077E',
        350: '#FF078D',
      },
      green: '#60BC23',
      yellow: '#FFE63C',
    },
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      fontSize: {
        xxs: '10px',
      },
      boxShadow: {
        button: '0 4px 0 #000B6F',
        input: '3px 6px 0 #000B6F ',
        card: '8px 12px 0 #000B6F',
      },
    },
  },
  plugins: [],
};
