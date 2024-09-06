/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    screens:{
      '2xl':'1300px',
      'xl':'1060px',
      'lg':'795px',
      'md':'660px',
      'sm':'320px'
    },
    fontFamily:{
      sans: [
        '"Cantarell"',
      ]
    },
    extend: {
      colors:{
        'bg':'#151515',
        'txt':'#f5f5f5'
      }
    },
  },
  plugins: [],
}