/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
module.exports = {
  // ...
  plugins: [
      // ...
      require('tailwind-scrollbar'),
  ],
};


