/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
      extend: {},
    },
    plugins: [
      function ({ addUtilities }) {
        addUtilities({
          '.scrollbar-hide': {
            /* Hide scrollbar for WebKit-based browsers */
            '-ms-overflow-style': 'none',  // IE & Edge
            'scrollbar-width': 'none',     // Firefox
          },
          '.scrollbar-hide::-webkit-scrollbar': {
            display: 'none'                // Chrome, Safari, Opera
          },
        });
      },
    ],
  };
  