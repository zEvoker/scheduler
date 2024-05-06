/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'gray': "#373c4f",
        'zy': '#878895',
        'paper': '#d3d5d6d7',
        'taskbg': '#3f4458',
      },
    },
    screens: {
      'lg': {'max':'1023px'},
      'md': {'max':'639px'}
    }
  },
  plugins: [],
}

