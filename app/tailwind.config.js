/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#0a060e',
        'secondary': '#7245b2',
        'my-gray': '' ,
      },
      fontFamily: { 
        'jose': ['Josefin Sans','sans-serif'],
        'outfit': ['Outfit','sans-serif'],
      }
    },
  },
  plugins: [],
}

