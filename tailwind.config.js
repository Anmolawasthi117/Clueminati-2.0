/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        bungee: ['Bungee', 'sans-serif'],
        caveat: ['Caveat', 'cursive'],
        pressStart: ['Press Start 2P', 'monospace'],
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

