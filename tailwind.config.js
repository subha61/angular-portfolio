/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}", // Tells Tailwind to scan your Angular templates
  ],
  theme: {
    extend: {
      spacing: {
        '7.5': '30px', // ✅ Now you can use w-7.5, h-7.5, etc.
        '34.25': '137px', // ✅ Now you can use w-7.5, h-7.5, etc.
      },
      fontSize: {
        'base': '16px', // ✅ Optional, Tailwind already uses 16px as base, but this makes it explicit
      },
      fontFamily: {
        segoe: ['"Segoe UI"', 'sans-serif'], // define custom font family
      },
    },
  },
  plugins: [], // ✅ Loads DaisyUI plugin
}

