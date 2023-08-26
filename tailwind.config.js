/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "light-grey": "#FAFAFA",
        "dark-grey": "#333",
        grey: "#737373",
        borders: "#D9D9D9",
        electric: "#633CFF",
        white: "#fff",
        error: "#FF3939",
        "light-purple": "#EFEBFF"
      }
    },
  },
  plugins: [],
}

