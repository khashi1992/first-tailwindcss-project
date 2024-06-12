/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'logo': "url('./img/a.svg')",
        'bg1': "url('img/hero-2.jpg')",
        'bg2': "url('img/hero-3.jpg')",
        'bg3': "url('img/p.png')",
        'bg4': "url('img/e.jpg')",
        'bg5': "url('img/j.jpg')",
        
      }
    },
  },
  plugins: [],
}

