/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Adjust the path to your project's structure
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1DA1F2', // Example color, change as needed
        blue: '#007BFF', // Example color, change as needed
      },
    },
  },
  plugins: [],
}
