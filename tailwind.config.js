/** @type {import('tailwindcss').Config} */

import defaultTheme from 'tailwindcss/defaultTheme' // import the default theme from the tailwind library
// checkout the list found here: .\node_modules\tailwindcss\stubs\config.full.js
// or here: https://github.com/tailwindlabs/tailwindcss/blob/master/stubs/config.full.js#L301

export default {
  content: ['./index.html', './src/**/*.{js,vue}'],
  theme: {
    extend: {
      fontFamily: {
        // we don't want to only offer Open Sans, but add it to the default fonts as the first option
        // if the font is not available, the browser will use the next font in the list
        sans: ['Inter var', 'Open Sans', ...defaultTheme.fontFamily.sans] // this is how we can add a new font to our project
      },
      gridColumn: {
        'span-1': 'span 1 / span 1',
        'span-2': 'span 2 / span 2',
        'span-3': 'span 3 / span 3',
        'span-4': 'span 4 / span 4',
        'span-5': 'span 5 / span 5',
        'span-6': 'span 6 / span 6',
        'span-7': 'span 7 / span 7',
        'span-8': 'span 8 / span 8',
        'span-9': 'span 9 / span 9',
        'span-10': 'span 10 / span 10',
        'span-11': 'span 11 / span 11',
        'span-12': 'span 12 / span 12'
      },
      colors: {
        primary: '#328de7'
        // this is how we can add a new color to our project
        // 'brand-gray-1': '#dadce0', // were using "" because the color name has a dash in it, and JavaScript doesn't support dashes in property names
        // 'brand-gray-2': '#f8f9fa',
        // 'brand-gray-3': '#80868b',
        // 'brand-blue-1': '#1967d2',
        // 'brand-blue-2': '#4285f4',
        // 'brand-green-1': '#137333'
      },
      boxShadow: {
        // blue: '0 0 3px 3px #4285f4', // use this with shadow-blue
        // gray: '0 1px 3px 0 rgba(60, 64, 67, 0.3)' // use this with shadow-gray
      }
    }
  },
  plugins: [require('@tailwindcss/forms')]
}
