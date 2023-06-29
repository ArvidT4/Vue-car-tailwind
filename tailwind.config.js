/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    screens:{
      'ipad':'800px',
    },
    extend: {},
  },
  plugins: [  
    require('flowbite/plugin')
  ],
}

