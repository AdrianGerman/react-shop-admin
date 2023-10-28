/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors');
delete colors['lightBlue'];
delete colors['warmGray'];
delete colors['trueGray'];
delete colors['coolGray'];
delete colors['blueGray'];

module.exports = {
  content: ['./src/**/*.{html,js,jsx}'],
  theme: {
    colors: {
      ...colors,
      'black-font': '#242424',
      'black-font-divs': '#343434',
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
