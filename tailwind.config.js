module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Includes all your React components
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'), // Add this line
  ],
};
