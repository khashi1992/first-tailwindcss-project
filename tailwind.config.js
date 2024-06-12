/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'logo': "url('../src/img/a.svg')",
        'bg1': "url('../src/img/hero-2.jpg')",
        'bg2': "url('../src/img/hero-3.jpg')",
        'bg3': "url('../src/img/p.png')",
        'bg4': "url('../src/img/e.jpg')",
        'bg5': "url('../src/img/j.jpg')",
        
      }
    },
  },
  plugins: [],
}

